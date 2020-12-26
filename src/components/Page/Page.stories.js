import { createPage } from './Page';
import * as HeaderStories from '../Header/Header.stories';

export default {
  title: 'Example/Page',
  argTypes: {},
};

const Template = (args) => createPage(args);

export const Primary = Template.bind({});

