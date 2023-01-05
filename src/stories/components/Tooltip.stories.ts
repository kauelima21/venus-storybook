import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { VenusTooltipComponent, VenusModule } from '@kauelima21/venus';

export default {
  title: 'Overlay/Tooltip',
  component: VenusTooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [VenusModule],
    }),
    componentWrapperDecorator((story) => {
      return `
        <css-reset>
          <div style='
            height: calc(100vh - 40px);
            width: calc(100vw - 40px);
            display: grid;
            place-items: center;
          '>
            ${story}
          </div>
        </css-reset>
      `;
    }),
  ],
} as Meta;

export const Tooltip: Story = () => ({
  template: `
  <venus-tooltip [tip]="tip">
    <p>Hover me</p>
  </venus-tooltip>`,
  props: {
    tip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
});
