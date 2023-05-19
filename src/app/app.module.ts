import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Add this line

import { AppComponent } from './app.component';
import { AppButtonComponent } from './app-button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- And this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
