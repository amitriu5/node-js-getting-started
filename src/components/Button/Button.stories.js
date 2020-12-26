import { createButton } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    border : {control : 'boolean'},
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label,...args}) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  const button = createButton({ label, ...args });
  const wrapper = document.createElement('div');
  wrapper.appendChild(button);
  wrapper.className = ['theme-color-07cb79', 'theme-skin-light'].join(' ');
  return wrapper;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const PrimaryWithBorder = Template.bind({});
PrimaryWithBorder.args = {
  primary : true,
  border : true,
  label : 'Button'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};


export const Icon = Template.bind({});
Icon.args = {
  label: '',
  iconId: 'add',
};
