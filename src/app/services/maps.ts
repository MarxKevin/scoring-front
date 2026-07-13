import { Injectable, signal } from '@angular/core';
import { MapModel } from '../models/tournament-model';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private readonly _maps = signal<MapModel[]>([
    {
      id: 1,
      name: 'Ceres'
    },
    {
      id: 2,
      name: 'Silva'
    },
    {
      id: 3,
      name: 'Helios Station'
    },
    {
      id: 4,
      name: 'The Cliff'
    }
  ]);

  readonly maps = this._maps.asReadonly();


  updateMaps(mapsList: MapModel[]) {
    this._maps.set(mapsList);
  }
}