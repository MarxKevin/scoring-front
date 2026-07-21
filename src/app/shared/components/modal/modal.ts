import { Component } from '@angular/core';
import { Button } from '../button/button'

@Component({
  selector: 'app-modal',
  imports: [Button],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {}
