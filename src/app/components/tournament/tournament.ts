import { Component, computed, inject, input, output } from '@angular/core';
import { TournamentService } from '../../services/tournament';
import { TournamentModel } from '../../models/tournament-model';
import { TournamentSettings } from '../tournament-settings/tournament-settings';

@Component({
  selector: 'app-tournament',
  imports: [TournamentSettings],
  templateUrl: './tournament.html',
  styleUrl: './tournament.css',
})
export class Tournament {

  tournamentId = input.required<number>();

  tournamentService = inject(TournamentService);

  tournament = computed<TournamentModel | undefined >(() => {
    if (this.tournamentId() > 0 && this.tournamentService.getOneTournament(this.tournamentId()) !== undefined){
      return this.tournamentService.getOneTournament(this.tournamentId())
    }else{
      return
    }
  });

  goBackToListing = output<boolean>()

  showPreviewWindow: boolean = true;
  showUpdateWindow: boolean = false;
  showSettingsWindow: boolean = false;

    goBack(){
    this.goBackToListing.emit(true);
  }

  showPreview(){
    this.showPreviewWindow = true;
    this.showUpdateWindow = false;
    this.showSettingsWindow = false;
  }

  showUpdate(){
    this.showPreviewWindow = false;
    this.showUpdateWindow = true;
    this.showSettingsWindow = false;
  }

  showSettings(){
    this.showPreviewWindow = false;
    this.showUpdateWindow = false;
    this.showSettingsWindow = true;
  }
}
