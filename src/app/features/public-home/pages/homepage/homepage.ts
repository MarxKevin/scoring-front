import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TournamentService } from '../../../tournaments/services/tournament';
import { TournamentModel } from '../../../tournaments/models/tournament.model';

@Component({
  selector: 'app-homepage',
  imports: [DatePipe],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

  tournamentService = inject(TournamentService)
  currentTournament = signal<TournamentModel | null>(null)

  ngOnInit(): void {
    this.getCurrentTournament()
  }

  getCurrentTournament(){
    this.currentTournament.set(this.tournamentService.getCurrentTournament())
  }
}
