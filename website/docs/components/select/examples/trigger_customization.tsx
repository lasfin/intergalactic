import React from 'react';
import { Flex } from '@semcore/ui/flex-box';
import Select from '@semcore/ui/select';
import { ButtonTrigger, LinkTrigger } from '@semcore/ui/base-trigger';

const options = Array(6)
  .fill('')
  .map((_, index) => ({
    value: index,
    label: `Label ${index}`,
    children: `Option ${index}`,
  }));

const Demo = () => (
  <Flex>
    {/* ButtonTrigger is the default trigger */}
    <Select tag={ButtonTrigger} options={options} placeholder='Select option' m='auto' />
    <Select tag={LinkTrigger} options={options} placeholder='Select option' m='auto' />
  </Flex>
);

export default Demo;
