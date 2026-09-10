import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TournamentStatus } from '../../models/tournament-status.model';
import { TournamentModel, createTournament } from '../../models/tournament.model';
import { TOURNAMENT_STATUS_CONFIG, TournamentStatusConfig } from '../../utils/tournament-status/tournament-status'

interface TournamentFormInterface {
  name: FormControl<string>;
  status: FormControl<TournamentStatus>;
}

@Component({
  selector: 'app-tournament-form',
  imports: [ReactiveFormsModule],
  templateUrl: './tournament-form.html',
  styleUrl: './tournament-form.css',
})
export class TournamentForm {

  readonly tournament = input<TournamentModel | null>(null);

  readonly cancelled = output<void>()
  readonly submitted = output<createTournament>();

  readonly statusConfig = TOURNAMENT_STATUS_CONFIG;

  readonly statuses = Object.entries(
    this.statusConfig,
  ) as [TournamentStatus, TournamentStatusConfig][];

  readonly form = new FormGroup<TournamentFormInterface>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    status: new FormControl<TournamentStatus>('draft', {
      nonNullable: true,
    }),
  });

  constructor() {
    // On pourra gérer ici le remplissage du formulaire
    // pour le mode modification.
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.form.getRawValue());
  }

  onCancel(): void {
    this.cancelled.emit();
  }

}
