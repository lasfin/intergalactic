import React from 'react';
import cn from 'classnames';
import createComponent, { Component, Root, sstyled } from '@semcore/core';
import DropdownMenu from '@semcore/dropdown-menu';
import { ButtonTrigger } from '@semcore/base-trigger';
import Divider from '@semcore/divider';
import findComponent from '@semcore/utils/lib/findComponent';
import logger from '@semcore/utils/lib/logger';
import resolveColorEnhance from '@semcore/utils/lib/enhances/resolveColorEnhance';
import addonTextChildren from '@semcore/utils/lib/addonTextChildren';
import InputSearch from './InputSearch';
import { useBox } from '@semcore/flex-box';
import { selectContext } from './context';
import uniqueIDEnhancement from '@semcore/utils/lib/uniqueID';
import i18nEnhance from '@semcore/utils/lib/enhances/i18nEnhance';
import { localizedMessages } from './translations/__intergalactic-dynamic-locales';
import { setFocus } from '@semcore/utils/lib/use/useFocusLock';

import style from './style/select.shadow.css';

function isSelectedOption(value, valueOption) {
  return Array.isArray(value) ? value.includes(valueOption) : valueOption === value;
}

function isEmptyValue(value) {
  return Array.isArray(value) ? value.length === 0 : value === null;
}

function getEmptyValue(multiselect) {
  return multiselect ? [] : null;
}

const scrollToNode = (node) => {
  if (!node) return;
  if (!node.scrollIntoView) return;
  node.scrollIntoView({
    block: 'nearest',
    inline: 'nearest',
  });
};

class RootSelect extends Component {
  static displayName = 'Select';

  static style = style;
  static enhance = [uniqueIDEnhancement(), i18nEnhance(localizedMessages), resolveColorEnhance()];

  static defaultProps = (props) => ({
    placeholder: props.multiselect ? 'Select options' : 'Select option',
    size: 'm',
    defaultValue: getEmptyValue(props.multiselect),
    defaultVisible: false,
    scrollToSelected: true,
    i18n: localizedMessages,
    locale: 'en',
  });

  firstSelectedOptionRef = React.createRef();

  triggerRef = React.createRef();

  isScrolledToFirstOption = false;

  uncontrolledProps() {
    return {
      visible: null,
      value: null,
    };
  }

  getTriggerProps() {
    const {
      size,
      disabled,
      visible,
      state,
      placeholder,
      value,
      options,
      forwardRef,
      name,
      multiselect,
      uid,
      disablePortal,
      getI18nText,
    } = this.asProps;

    return {
      id: `igc-${uid}-trigger`,
      'aria-controls': `igc-${uid}-list`,
      'aria-owns': `igc-${uid}-list`,
      focusHint: visible && !disablePortal ? getI18nText('triggerHint') : undefined,
      'aria-haspopup': 'listbox',
      'aria-expanded': visible ? 'true' : 'false',
      'aria-disabled': disabled ? 'true' : 'false',
      empty: isEmptyValue(value),
      size,
      value,
      name,
      $hiddenRef: forwardRef,
      multiselect,
      state,
      placeholder,
      disabled,
      active: visible,
      onClear: this.handlerClear,
      children: this.renderChildrenTrigger(value, options),
      getI18nText,
      ref: this.triggerRef,
    };
  }

  getListProps() {
    const { multiselect, uid } = this.asProps;

    return {
      'aria-multiselectable': multiselect ? 'true' : undefined,
      id: `igc-${uid}-list`,
      role: 'listbox',
      'aria-label': 'List of options',
    };
  }

  getMenuProps() {
    const { uid, getI18nText, multiselect } = this.asProps;

    return {
      'aria-multiselectable': multiselect ? 'true' : undefined,
      id: `igc-${uid}-list`,
      role: 'listbox',
      'aria-label': getI18nText('optionsList'),
    };
  }

  getOptionProps(props) {
    const { value } = this.asProps;
    const selected = isSelectedOption(value, props.value);
    const other = {};
    this._optionSelected = selected;

    if (selected) {
      other.ref = this.handleOptionNode;
    }

    return {
      selected,
      'aria-selected': selected ? 'true' : 'false',
      'aria-disabled': props.disabled ? 'true' : 'false',
      role: 'option',
      onClick: this.bindHandlerOptionClick(props.value),
      ...other,
    };
  }

  lastHandleOptionNodeCall = -1;
  handleOptionNode = (node) => {
    if (!this.asProps.scrollToSelected) return;
    if (Date.now() - this.lastHandleOptionNodeCall < 30) return;
    this.lastHandleOptionNodeCall = Date.now();
    setTimeout(() => {
      // in most cases 10ms timeout works perfectly and scrolls before user can see it
      if (this.asProps.visible) scrollToNode(node);
    }, 10);
    setTimeout(() => {
      // in rare cases 10ms timeout it not enough so 30ms timeout saves the day
      if (this.asProps.visible) scrollToNode(node);
    }, 30);
  };

  getOptionCheckboxProps(props) {
    const { size, resolveColor } = this.asProps;
    const hasOption = props.value === undefined;
    const optionProps = hasOption ? {} : this.getOptionProps(props);
    const selected = this._optionSelected;
    this._optionSelected = null;
    return {
      ...optionProps,
      size,
      selected,
      resolveColor,
    };
  }

  getDividerProps() {
    return { my: 1, 'aria-disabled': 'true' };
  }

  renderChildrenTrigger(value, options) {
    if (options) {
      return [].concat(value).reduce((acc, value) => {
        const selectedOption = options.find((o) => isSelectedOption(value, o.value));
        if (!selectedOption) return acc;
        if (acc.length) acc.push(', ');
        acc.push(selectedOption.label || selectedOption.value);
        return acc;
      }, []);
    }
    return Array.isArray(value)
      ? value.reduce((acc, value) => {
          if (acc.length) acc.push(', ');
          acc.push(value);
          return acc;
        }, [])
      : value;
  }

  bindHandlerOptionClick = (optionValue) => (e) => {
    let newValue = optionValue;
    const { value, multiselect, interaction } = this.asProps;
    if (Array.isArray(value)) {
      if (value.includes(optionValue)) {
        newValue = value.filter((v) => v !== optionValue);
      } else {
        newValue = value.concat(optionValue);
      }
    }
    this.handlers.value(newValue, e);
    if (!multiselect) {
      this.handlers.visible(false);
      setTimeout(() => {
        if (interaction !== 'focus') {
          setFocus(this.triggerRef.current);
          return;
        }
      }, 0);
    }
  };

  handlerClear = (e) => {
    const { value } = this.asProps;
    const emptyValue = getEmptyValue(Array.isArray(value));
    this.handlers.value(emptyValue, e);
    this.handlers.visible(false);
  };

  render() {
    const { Children, options, multiselect, value, uid, forcedAdvancedMode, ...other } =
      this.asProps;
    const advancedMode =
      forcedAdvancedMode ||
      findComponent(Children, [Select.Trigger.displayName, Select.Popper.displayName]);

    logger.warn(
      options && advancedMode,
      "Don't use at the same time 'options' property and '<Select.Trigger/>/<Select.Popper/>'",
      other['data-ui-name'] || Select.displayName,
    );

    if (options) {
      return (
        <Root render={DropdownMenu}>
          <Select.Trigger {...other} />
          <Select.Menu>
            {options.map((option, index) => {
              return (
                <Select.Option
                  key={option.value}
                  id={`igc-${uid}-option-${index}`}
                  aria-selected={value === option.value}
                  {...option}
                >
                  {multiselect && <Select.Option.Checkbox />}
                  {option.children}
                </Select.Option>
              );
            })}
          </Select.Menu>
        </Root>
      );
    }

    return (
      <Root render={DropdownMenu}>
        <Children />
      </Root>
    );
  }
}

const isInputTriggerTag = (tag) => {
  if (typeof tag === 'string') return tag.toLowerCase().includes('input');
  if (typeof tag === 'object' && tag !== null && typeof tag.displayName === 'string')
    return tag.displayName.toLowerCase().includes('input');
  if (typeof tag === 'object' && tag !== null && typeof tag.render?.displayName === 'string')
    return tag.render.displayName.toLowerCase().includes('input');
  return false;
};

function Trigger({
  Children,
  name,
  value,
  styles,
  $hiddenRef,
  tag: Tag = ButtonTrigger,
  getI18nText,
}) {
  const hasInputTrigger = isInputTriggerTag(Tag);
  const SSelectTrigger = Root;

  return sstyled(styles)(
    <SSelectTrigger
      render={DropdownMenu.Trigger}
      tag={Tag}
      placeholder={getI18nText('selectPlaceholder')}
      aria-autocomplete={(hasInputTrigger && 'list') || undefined}
      role={(hasInputTrigger && 'combobox') || undefined}
    >
      {addonTextChildren(
        Children,
        Tag.Text || ButtonTrigger.Text,
        Tag.Addon || ButtonTrigger.Addon,
        true,
      )}
      {name && <input type='hidden' defaultValue={value} name={name} ref={$hiddenRef} />}
    </SSelectTrigger>,
  );
}

function Checkbox(props) {
  const [SOptionCheckbox, componentProps] = useBox(props, props.forwardRef);
  const { size, theme, selected, resolveColor, indeterminate } = props;
  const styles = sstyled(props.styles);

  const { className, style } = styles.cn('SOptionCheckbox', {
    size,
    'use:theme': resolveColor(theme),
    checked: selected,
    indeterminate,
  });

  return (
    <SOptionCheckbox
      {...componentProps}
      className={cn(className, componentProps.className) || undefined}
      style={{ ...style, ...componentProps.style }}
      role='checkbox'
      tabIndex={-1}
      aria-checked={selected}
    />
  );
}

const InputSearchWrapper = function () {
  return <Root render={InputSearch} />;
};

const Select = createComponent(
  RootSelect,
  {
    Trigger: [
      Trigger,
      {
        Addon: ButtonTrigger.Addon,
        Text: ButtonTrigger.Text,
      },
    ],
    Popper: DropdownMenu.Popper,
    List: DropdownMenu.List,
    Menu: DropdownMenu.Menu,
    Option: [
      DropdownMenu.Item,
      {
        Addon: DropdownMenu.Item.Addon,
        Checkbox,
      },
    ],
    OptionTitle: DropdownMenu.ItemTitle,
    OptionHint: DropdownMenu.ItemHint,
    Divider,
    InputSearch: InputSearchWrapper,
    Input: InputSearchWrapper,
  },
  { parent: DropdownMenu, context: selectContext },
);

export const wrapSelect = (wrapper) => wrapper;

export default Select;
