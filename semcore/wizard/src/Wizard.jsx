import React from 'react';
import createComponent, { Component, Root, sstyled, styled } from '@semcore/core';
import { Box } from '@semcore/flex-box';
import { Text } from '@semcore/typography';
import CheckM from '@semcore/icon/Check/m';
import keyboardFocusEnhance from '@semcore/utils/lib/enhances/keyboardFocusEnhance';

import style from './style/wizard.shadow.css';

class WizardRoot extends Component {
  static displayName = 'Wizard';
  static style = style;
  static defaultProps = {
    currentStep: 1,
  };

  getStepProps() {
    const { currentStep } = this.asProps;
    return {
      currentStep,
    };
  }

  getStepperProps(props) {
    const { currentStep, steps } = this.asProps;
    const isActive = props.value === currentStep;
    const isDisabled = steps.find((s) => s.value === props.value).disabled;

    return {
      currentStep,
      steps,
      'aria-disabled': isDisabled,
      'aria-current': isActive,
    };
  }

  render() {
    const SWizard = this.Root;
    const { Children, styles } = this.asProps;

    return styled(styles)(
      <SWizard render={Box}>
        <Children />
      </SWizard>,
    );
  }
}

function Sidebar(props) {
  const { Children, styles, title } = props;
  const SSidebar = Root;
  const SSidebarHeader = Text;
  return sstyled(styles)(
    <SSidebar render={Box} {...props} role="menu">
      <SSidebarHeader tag="div">{title}</SSidebarHeader>
      <Children />
    </SSidebar>,
  );
}

function Step(props) {
  const SStep = Root;
  const { styles, currentStep, value } = props;
  return sstyled(styles)(<>{currentStep === value ? <SStep render={Box} {...props} /> : null}</>);
}

function Stepper(props) {
  const { Children, styles, currentStep, value, steps } = props;
  const SStepper = Root;
  const SStepNumber = Text;
  const SStepDescription = Box;

  return sstyled(styles)(
    <SStepper
      active={value === currentStep}
      disabled={steps.find((s) => s.value === value).disabled}
      render={Box}
      role="menuitem"
      {...props}
    >
      <SStepNumber>{value < currentStep ? <CheckM /> : value}</SStepNumber>
      <SStepDescription tag="span">
        {steps.filter((s) => s.value === value)[0].title}
        <Children />
      </SStepDescription>
    </SStepper>,
  );
}

Stepper.enhance = [keyboardFocusEnhance()];

function Content(props) {
  const { Children, styles } = props;
  const SContent = Root;
  return sstyled(styles)(
    <SContent render={Box}>
      <Children />
    </SContent>,
  );
}

const Wizard = createComponent(WizardRoot, {
  Sidebar,
  Content,
  Step,
  Stepper,
});

export default Wizard;
