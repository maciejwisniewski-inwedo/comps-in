import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comps-in';
  username = '';  // Add this line

  handleButtonClick() {
    console.log('Button clicked!');
  }
}
