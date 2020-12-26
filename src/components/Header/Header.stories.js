import { createHeader } from './Header';

export default {
  title: 'Example/Header',
  argTypes: {},
};

const Template = (args) => createHeader(args);

export const Primary = Template.bind({});
Primary.args = {};
