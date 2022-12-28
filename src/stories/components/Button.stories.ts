import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { VenusButtonComponent, VenusModule } from '@kauelima21/venus';

export default {
  title: 'Form/Button',
  component: VenusButtonComponent,
  argTypes: {
    bg: {
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    type: {
      options: ['button', 'submit', 'reset'],
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
        <css-reset>
          ${story}
        </css-reset>
      `;
    }),
  ],
} as Meta;

const Template: Story<VenusButtonComponent> = (args: VenusButtonComponent) => ({
  props: args,
  template: `
    <venus-button
      [bg]="bg"
      [full]="full"
      [isDisabled]="isDisabled"
      [type]="type"
      [size]="size"
    >Label</venus-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  bg: 'primary',
  full: false,
  isDisabled: false,
  type: 'button',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  bg: 'secondary',
  full: false,
  isDisabled: false,
  type: 'button',
  size: 'md',
};

export const Danger = Template.bind({});
Danger.args = {
  bg: 'danger',
  full: false,
  isDisabled: false,
  type: 'button',
  size: 'md',
};

export const Success = Template.bind({});
Success.args = {
  bg: 'success',
  full: false,
  isDisabled: false,
  type: 'button',
  size: 'md',
};

export const Warning = Template.bind({});
Warning.args = {
  bg: 'warning',
  full: false,
  isDisabled: false,
  type: 'button',
  size: 'md',
};

export const Full = Template.bind({});
Full.args = {
  bg: 'primary',
  full: true,
  isDisabled: false,
  type: 'button',
  size: 'md',
};
