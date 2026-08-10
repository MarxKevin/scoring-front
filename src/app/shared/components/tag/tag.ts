import { Component, computed, input } from '@angular/core';

export type TagVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.css',
})
export class Tag {

  variant = input<TagVariant>('primary');

  classes = computed(() => {

    const variants = {
      primary:
        'bg-indigo-600 text-white',

      secondary:
        'bg-gray-200 text-gray-900',

      success:
        'bg-green-500 text-gray-900',

      warning:
        'bg-orange-300 text-gray-900',

      danger:
        'bg-red-600 text-white'
    };

    return `${variants[this.variant()]}`;
  });
}
