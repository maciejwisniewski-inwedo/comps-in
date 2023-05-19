import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../app/input/input.component'; // Import your input component

export default {
  title: 'input', // Replace with your input component name
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Default = () => ({
  component: InputComponent,
  props: {
    // Add any props that your input component accepts, e.g.,
    // placeholder: 'Enter your name',
    // inputType: 'text',
    // onChange: (event: any) => {
    //   console.log('Input changed:', event.target.value);
    // },
  },
});
