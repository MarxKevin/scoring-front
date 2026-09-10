import { Component, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TournamentModel, createTournament } from '../../models/tournament.model';
import { TournamentService } from '../../services/tournament';
import { Button } from '../../../../shared/components/button/button';
import { Modal } from '../../../../shared/components/modal/modal';
import { Tag } from '../../../../shared/components/tag/tag';
import { TOURNAMENT_STATUS_CONFIG } from '../../utils/tournament-status/tournament-status';
import { TournamentForm } from '../../components/tournament-form/tournament-form'



@Component({
  selector: 'app-tournament-listing',
  imports: [ReactiveFormsModule, Button, Modal, Tag, TournamentForm],
  templateUrl: './tournament-listing.html',
  styleUrl: './tournament-listing.css',
})
export class TournamentListing {

  readonly statusConfig = TOURNAMENT_STATUS_CONFIG;
  readonly isModalOpen = signal(false);

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

  //toggleCreationModal(isOpen: boolean){
    //this.showCreationModal = isOpen;
  //}

  /*addTournament(){

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
    //this.toggleCreationModal(false);

    // Clear input
    this.tournamentCreationForm.get('name')?.reset()
    
  }*/

  deleteTournament(id:number){
    this.tournamentService.deleteTournament(id);
    this.getTournamentList();
  }

  goToTournament(id:number){
    this.tournamentSelectedId.emit(id)
  }

  openCreateModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  createTournament(tournament: createTournament): void {

    const newTournament: TournamentModel = {
      id: this.tournamentsList().length + 1,
      ...tournament
    };

    this.tournamentService.createTournament(newTournament);

    this.getTournamentList();

    this.isModalOpen.set(false);
  }

}

