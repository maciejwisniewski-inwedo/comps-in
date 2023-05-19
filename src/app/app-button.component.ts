import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: []
})
export class AppButtonComponent {
  @Input() colorClass: string = 'bg-blue-500'; // Default Tailwind CSS class for background color
  @Input() size: { width: string; height: string; } = { width: 'auto', height: 'auto' }; // Default size
  @Input() icon: string | null = null; // Default no icon
  @Input() text: string = ''; // Default no text
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
