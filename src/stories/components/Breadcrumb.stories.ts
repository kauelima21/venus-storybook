import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { VenusBreadcrumbComponent, VenusModule } from '@kauelima21/venus';

export default {
  title: 'Navigation/Breadcrumb',
  component: VenusBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [VenusModule],
    }),
    componentWrapperDecorator((story) => {
      return `
        <css-reset>
          ${story}
        </css-reset>`;
    }),
  ],
} as Meta;

const Template: Story<VenusBreadcrumbComponent> = (
  args: VenusBreadcrumbComponent
) => ({
  props: args,
});

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  paths: [
    {
      name: 'Home',
      endpoint: '/home',
      child: [{ name: 'Label', endpoint: '/' }],
    },
  ],
};
