import { Component, computed, inject, input, output } from '@angular/core';
import { TournamentService } from '../../services/tournament';
import { TournamentModel } from '../../models/tournament-model';

@Component({
  selector: 'app-tournament-details',
  imports: [],
  templateUrl: './tournament-details.html',
  styleUrl: './tournament-details.css',
})
export class TournamentDetails {

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
