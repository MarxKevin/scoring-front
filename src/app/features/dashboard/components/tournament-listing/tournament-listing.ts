import { Component, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TournamentModel } from '../../models/tournament-model';
import { TournamentService } from '../../services/tournament';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-tournament-listing',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './tournament-listing.html',
  styleUrl: './tournament-listing.css',
})
export class TournamentListing {

    showCreationModal: boolean = false;
  tournamentCreationForm = new FormGroup({
    name: new FormControl('')
  })

  tournamentService = inject(TournamentService);
  tournamentsList = signal<Array<TournamentModel>>([]);

  tournamentSelectedId = output<number>()

  ngOnInit(): void {
    this.getTournamentList()
    
  }

  getTournamentList(){
    this.tournamentsList.set(this.tournamentService.getTournaments());
  }

  toggleCreationModal(isOpen: boolean){
    this.showCreationModal = isOpen;
  }

  addTournament(){

    let newTournament = <TournamentModel>{
      id : this.tournamentsList().length + 1,
      name:"Tournament N° " + this.tournamentsList().length
    }

    if(this.tournamentCreationForm.value.name !== undefined){
      newTournament.name = this.tournamentCreationForm.value.name;
    }
    
    this.tournamentService.addTournament(newTournament);
    this.getTournamentList();
  
    // Close modal
    this.toggleCreationModal(false);

    // Clear input
    this.tournamentCreationForm.get('name')?.reset()
    
  }

  deleteTournament(id:number){
    this.tournamentService.deleteTournament(id);
    this.getTournamentList();
  }

  goToTournament(id:number){
    this.tournamentSelectedId.emit(id)
  }
}
