import { Component, effect, inject, signal } from '@angular/core';
import { MapsService } from '../../services/maps';
import { MapModel } from '../../models/map.model';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

type MapForm = FormGroup<{
  id: FormControl<number>;
  name: FormControl<string>;
}>;

@Component({
  selector: 'app-tournament-settings',
  imports: [ReactiveFormsModule],
  templateUrl: './tournament-settings.html',
  styleUrl: './tournament-settings.css',
})
export class TournamentSettings {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly mapsService = inject(MapsService);

  readonly mapsList = this.mapsService.maps;

  readonly mapsCreationForm = this.fb.group({
    maps: this.fb.array<MapForm>([])
  });

  constructor() {

    effect(() => {

      const maps = this.mapsList();

      this.mapsFormArray.clear();

      maps.forEach(map => {
        this.mapsFormArray.push(this.createMapForm(map));
      });

    });

  }

  get mapsFormArray(): FormArray<MapForm> {
    return this.mapsCreationForm.controls.maps;
  }

  private createMapForm(map: MapModel): MapForm {
    return this.fb.group({
      id: this.fb.control(map.id),
      name: this.fb.control(map.name)
    });

  }

  addMap(): void {

    const nextId =
      Math.max(
        0,
        ...this.mapsFormArray.controls.map(c => c.controls.id.value)
      ) + 1;

    this.mapsFormArray.push(
      this.createMapForm({
        id: nextId,
        name: ''
      })
    );

  }

  removeMap(index: number): void {
    this.mapsFormArray.removeAt(index);
  }

  updateMapsList(): void {

    const maps: MapModel[] = this.mapsFormArray.getRawValue();

    this.mapsService.updateMaps(maps);

  }

}
