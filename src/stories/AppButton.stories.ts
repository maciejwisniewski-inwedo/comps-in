import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from '../app//app-button.component';

export default {
  title: 'AppButton',
  component: AppButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppButtonComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Default = () => ({
  component: AppButtonComponent,
  props: {
    colorClass: 'bg-blue-500',
    size: { width: '100px', height: '50px' },
    icon: 'fa fa-home',
    text: 'Click me',
    buttonClick: () => {
      console.log('Button clicked!');
    },
  },
});
