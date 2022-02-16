import GlobalStyles from '../GlobalStyles.js';
import Status from './Status.js';

export default {
  title: 'Components/Status',
  component: Status,
  decorators: [
    Story => (
      <div>
        <GlobalStyles />
        <Story />
      </div>
    ),
  ],
};

const Template = args => <Status {...args} />;

export const stateGreen = Template.bind({});
stateGreen.args = {
  isGreen: true,
};

export const stateRed = Template.bind({});
stateRed.args = {
  isGreen: false,
};
