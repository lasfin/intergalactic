---
title: Icon
tabs: Design('icon'), A11y('icon-a11y'), API('icon-api'), Example('icon-code'), Changelog('icon-changelog')
---

## Interactive

If you want an interactive icon that changes when hovered over (such as color and cursor), simply set the desired color for the icon using the `color` property and add the `interactive` property. That's it! You won't need to specify an extra color for the icon when it's hovered over or in an active state.

::: sandbox

<script lang="tsx">
import React from 'react';
import LinkExternalM from '@semcore/ui/icon/LinkExternal/m';

const Demo = () => (
  <LinkExternalM
    interactive
    aria-label='Go to our awesome article'
    color='icon-secondary-neutral'
  />
);


</script>

:::
