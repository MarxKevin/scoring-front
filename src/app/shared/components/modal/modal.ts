import { Component, input, output } from '@angular/core';
import { Button } from '../button/button'

@Component({
  selector: 'app-modal',
  imports: [Button],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  readonly open = input(false);
  readonly title = input('');

  readonly closed = output<void>();

  close(): void {
    this.closed.emit()
  }
}
