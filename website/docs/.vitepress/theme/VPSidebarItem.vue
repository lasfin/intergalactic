<!--  
To remove after merge of https://github.com/vuejs/vitepress/issues/2257
Same to https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSidebarItem.vue but also support `activeMatch`
-->
<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import { useSidebarControl } from 'vitepress/dist/client/theme-default/composables/sidebar.js';
import VPIconChevronRight from 'vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';

import { useData } from 'vitepress';

type Item = { activeMatch?: string; items?: Item[] }

const props = defineProps<{
  item: DefaultTheme.SidebarItem & Item
  depth: number
}>()

const computeActiveMatch = (item: Item) => item.activeMatch ? (`/${page.value.relativePath}`).startsWith(item.activeMatch) : false
const computeChildrenActiveMatch = (item: Item) => {
  if (item?.items?.some(computeChildrenActiveMatch)) return true;
  return computeActiveMatch(item);
}

const { page } = useData();
const activeMatch = computed(() => computeActiveMatch(props.item));

const activeMatchedChildrenUncollapse = ref(computeChildrenActiveMatch(props.item))

const {
  collapsed,
  collapsible,
  isLink,
  isActiveLink,
  hasActiveLink,
  hasChildren,
  toggle,
} = useSidebarControl(computed(() => props.item))

const sectionTag = computed(() => (hasChildren.value ? 'section' : `div`))

const linkTag = computed(() => (isLink.value ? 'a' : 'div'))

const textTag = computed(() => {
  return !hasChildren.value
    ? 'p'
    : props.depth + 2 === 7
      ? 'p'
      : `h${props.depth + 2}`
})

const itemRole = computed(() => (isLink.value ? undefined : 'button'))

const classes = computed(() => [
  [`level-${props.depth}`],
  { collapsible: collapsible.value },
  { collapsed: collapsed.value && !activeMatchedChildrenUncollapse.value },
  { 'is-link': isLink.value },
  { 'is-active': isActiveLink.value || activeMatch.value },
  { 'has-active': hasActiveLink.value }
])

function collapse() {
  if (!collapsed.value) {
    toggle();
  }
}
if (globalThis.window) {
  (globalThis.window as any).sidebarItems ??= [];
  (globalThis.window as any).sidebarItems.push({ item: props.item, collapse })
}

const isParentItem = (item: Item) => item.items?.some(children => children === props.item || isParentItem(children))

function collapseAllOthers() {
  for (let { item, collapse: collapseItem } of (globalThis.window as any).sidebarItems) {
    if (!isParentItem(item) && item !== props.item) {
      collapseItem();
    }
  }
}

function onItemInteraction(e: MouseEvent | Event) {
  if ('key' in e && e.key !== 'Enter') {
    return
  }
  if (!props.item.link) {
    collapseAllOthers()
    toggle()
  }
  activeMatchedChildrenUncollapse.value = false;
}

function onCaretClick() {
  if (props.item.link) {
    collapseAllOthers()
    toggle()
  }
  activeMatchedChildrenUncollapse.value = false;
}

// window.

</script>

<template>
  <component :is="sectionTag" class="VPSidebarItem" :class="classes">
    <div v-if="item.text" class="item" :role="itemRole" v-on="item.items
      ? { click: onItemInteraction, keydown: onItemInteraction }
      : {}
      " :tabindex="item.items && 0">
      <div class="indicator" />

      <VPLink v-if="item.link" :tag="linkTag" class="link" :href="item.link" :rel="item.rel" :target="item.target">
        <component :is="textTag" class="text" v-html="item.text" />
      </VPLink>
      <component v-else :is="textTag" class="text" v-html="item.text" />

      <div v-if="item.collapsed != null" class="caret" role="button" aria-label="toggle section" @click="onCaretClick"
        @keydown.enter="onCaretClick" tabindex="0">
        <VPIconChevronRight class="caret-icon" />
      </div>
    </div>

    <div v-if="item.items && item.items.length" class="items">
      <template v-if="depth < 5">
        <VPSidebarItem v-for="i in item.items" :key="i.text" :item="i" :depth="depth + 1" />
      </template>
    </div>
  </component>
</template>

<style scoped>
.VPSidebarItem.level-0 {
  padding-bottom: 24px;
}

.VPSidebarItem.collapsed.level-0 {
  padding-bottom: 10px;
}

.item {
  position: relative;
  display: flex;
  width: 100%;
}

.VPSidebarItem.collapsible>.item {
  cursor: pointer;
}

.indicator {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: -17px;
  width: 2px;
  border-radius: 2px;
  transition: background-color 0.25s;
}

.VPSidebarItem.level-2.is-active>.item>.indicator,
.VPSidebarItem.level-3.is-active>.item>.indicator,
.VPSidebarItem.level-4.is-active>.item>.indicator,
.VPSidebarItem.level-5.is-active>.item>.indicator {
  background-color: var(--vp-c-brand-1);
}

.link {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.text {
  flex-grow: 1;
  padding: 4px 0;
  line-height: 24px;
  font-size: 14px;
  transition: color 0.25s;
}

.VPSidebarItem.level-0 .text {
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.VPSidebarItem.level-1 .text,
.VPSidebarItem.level-2 .text,
.VPSidebarItem.level-3 .text,
.VPSidebarItem.level-4 .text,
.VPSidebarItem.level-5 .text {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.VPSidebarItem.level-0.is-link>.item>.link:hover .text,
.VPSidebarItem.level-1.is-link>.item>.link:hover .text,
.VPSidebarItem.level-2.is-link>.item>.link:hover .text,
.VPSidebarItem.level-3.is-link>.item>.link:hover .text,
.VPSidebarItem.level-4.is-link>.item>.link:hover .text,
.VPSidebarItem.level-5.is-link>.item>.link:hover .text {
  color: var(--vp-c-brand-1);
}

.VPSidebarItem.level-0.has-active>.item>.text,
.VPSidebarItem.level-1.has-active>.item>.text,
.VPSidebarItem.level-2.has-active>.item>.text,
.VPSidebarItem.level-3.has-active>.item>.text,
.VPSidebarItem.level-4.has-active>.item>.text,
.VPSidebarItem.level-5.has-active>.item>.text,
.VPSidebarItem.level-0.has-active>.item>.link>.text,
.VPSidebarItem.level-1.has-active>.item>.link>.text,
.VPSidebarItem.level-2.has-active>.item>.link>.text,
.VPSidebarItem.level-3.has-active>.item>.link>.text,
.VPSidebarItem.level-4.has-active>.item>.link>.text,
.VPSidebarItem.level-5.has-active>.item>.link>.text {
  color: var(--vp-c-text-1);
}

.VPSidebarItem.level-0.is-active>.item .link>.text,
.VPSidebarItem.level-1.is-active>.item .link>.text,
.VPSidebarItem.level-2.is-active>.item .link>.text,
.VPSidebarItem.level-3.is-active>.item .link>.text,
.VPSidebarItem.level-4.is-active>.item .link>.text,
.VPSidebarItem.level-5.is-active>.item .link>.text {
  color: var(--vp-c-brand-1);
}

.caret {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -7px;
  width: 32px;
  height: 32px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: color 0.25s;
  flex-shrink: 0;
}

.item:hover .caret {
  color: var(--vp-c-text-2);
}

.item:hover .caret:hover {
  color: var(--vp-c-text-1);
}

.caret-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
  transform: rotate(90deg);
  transition: transform 0.25s;
}

.VPSidebarItem.collapsed .caret-icon {
  transform: rotate(0);
}

.VPSidebarItem.level-1 .items,
.VPSidebarItem.level-2 .items,
.VPSidebarItem.level-3 .items,
.VPSidebarItem.level-4 .items,
.VPSidebarItem.level-5 .items {
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
}

.VPSidebarItem.collapsed .items {
  display: none;
}
</style>