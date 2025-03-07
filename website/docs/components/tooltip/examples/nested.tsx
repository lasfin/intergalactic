import React from 'react';
import Tooltip from '@semcore/ui/tooltip';
import { Box, Flex } from '@semcore/ui/flex-box';
import Link from '@semcore/ui/link';

const Demo = () => (
  <Flex>
    <Box m='auto' p={5}>
      <Tooltip>
        <Tooltip.Trigger aria-describedby={undefined}>
          {({ popperId }) => <Link aria-describedby={popperId}>Hello world</Link>}
        </Tooltip.Trigger>
        <Tooltip.Popper>Hello, stranger</Tooltip.Popper>
      </Tooltip>
    </Box>
  </Flex>
);

export default Demo;
