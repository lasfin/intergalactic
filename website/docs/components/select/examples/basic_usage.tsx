import React from 'react';
import { Flex } from '@semcore/ui/flex-box';
import Select from '@semcore/ui/select';

const options = Array(6)
  .fill('')
  .map((_, index) => ({
    value: index, // value of the selected option
    label: `Label ${index}`, // the value displayed in the trigger when the option is selected
    children: `Option ${index}`, // option's children displayed in the dropdown
  }));

const Demo = () => (
  <Flex>
    <Select options={options} placeholder='Select option' m='auto' />
  </Flex>
);

export default Demo;
