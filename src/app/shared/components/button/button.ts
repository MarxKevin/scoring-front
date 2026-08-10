import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { LucideAngularModule, X, Check, Plus } from 'lucide-angular';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
const ICONS = { cross: X, check: Check, plus: Plus}

@Component({
  selector: 'app-button',
  imports: [LucideAngularModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {

  icon = input<keyof typeof ICONS>();

  iconOnly = input(false, {
      transform: booleanAttribute
  });

  variant = input<ButtonVariant>('primary');

  disabled = input(false, {
      transform: booleanAttribute
  });

  clicked = output<void>();

  classes = computed(() => {

    const base =
      'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition';

    const variants = {
      primary:
        'bg-indigo-600 text-white hover:bg-indigo-700',

      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300',

      success:
        'bg-green-500 text-gray-900 hover:bg-green-200',

      warning:
        'bg-orange-300 text-gray-900 hover:bg-orange-200',

      danger:
        'bg-red-600 text-white hover:bg-red-700'
    };

    return `${base} ${variants[this.variant()]}`;
  });

  iconVariant = computed(() => {
    const name = this.icon();
    return name ? ICONS[name] : undefined;
  })

  onClick() {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
  
}
