import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { VenusInputComponent, VenusModule } from '@kauelima21/venus';

export default {
  title: 'Form/Input',
  component: VenusInputComponent,
  argTypes: {
    type: {
      options: ['text', 'number', 'password'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [VenusModule],
    }),
    componentWrapperDecorator((story) => {
      return `
        <div
          style='height: calc(100vh - 40px); display: grid; place-items: center;'
        >
          <div style='width: 300px;'>${story}</div>
        </div>`;
    }),
  ],
} as Meta;

const Template: Story<VenusInputComponent> = (args: VenusInputComponent) => ({
  props: args,
});

export const Base = Template.bind({});
Base.args = {
  name: 'generic_name',
  type: 'text',
  placeholder: 'Placeholder',
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'generic_name',
  type: 'text',
  placeholder: 'Placeholder',
  isDisabled: true,
};
