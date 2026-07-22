import { Component } from '@angular/core';
import { TournamentListing } from '../../components/tournament-listing/tournament-listing';
import { Tournament } from '../../components/tournament/tournament';

@Component({
  selector: 'app-tournaments',
  imports: [TournamentListing, Tournament],
  templateUrl: './tournaments.html',
  styleUrl: './tournaments.css',
})
export class Tournaments {

  selectedTournamentId = 0;
  showOneTournament:boolean = false;

  switchPage(){
    this.showOneTournament = this.selectedTournamentId > 0 ? true : false
  }

  onTournamentSelected(id: number){
    this.selectedTournamentId = id;
    this.switchPage();
  }


  backToListing(){
    console.log('e')
    this.selectedTournamentId = 0;
    this.switchPage();
  }
}
