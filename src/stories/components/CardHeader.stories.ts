import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { VenusCardComponent, VenusModule } from '@kauelima21/venus';

export default {
  title: 'Surfaces/Card/CardHeader',
  component: VenusCardComponent,
  argTypes: {
    radius: {
      options: ['sm', 'md', 'lg', 'xl'],
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

const Template: Story<VenusCardComponent> = (args: VenusCardComponent) => ({
  props: args,
  template: `
      <venus-card [full]="full" [radius]="radius">
      <venus-card-header title="Lorem ipsum"></venus-card-header>
      <venus-card-content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi
          consectetur assumenda laboriosam libero quidem sint ipsum, fugit
          culpa, minus facilis vitae voluptatem expedita soluta autem
          labore. Ullam quos, recusandae facilis similique assumenda eum
          adipisci alias, incidunt rem veritatis quasi!
        </p>
      </venus-card-content>
    </venus-card>`,
});

export const CardHeader = Template.bind({});
CardHeader.args = {
  full: false,
  radius: 'sm',
};
