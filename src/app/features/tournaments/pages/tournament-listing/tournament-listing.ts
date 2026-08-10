import { Component, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TournamentModel } from '../../models/tournament-model';
import { TournamentService } from '../../services/tournament';
import { Button } from '../../../../shared/components/button/button';
import { Modal } from '../../../../shared/components/modal/modal';
import { Tag } from '../../../../shared/components/tag/tag';
import { getCompetitionStatus } from '../../utils/tournament-status/tournament-status';


type TournamentStatus = 'upcoming' | 'ongoing' | 'archived';
type TagVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

const COMPETITION_STATUS_VARIANT: Record<TournamentStatus, TagVariant> = {
  ongoing: 'success',
  upcoming: 'warning',
  archived: 'secondary'
};

const COMPETITION_STATUS_LABEL: Record<TournamentStatus, string> = {
  ongoing: 'En cours',
  upcoming: 'Prochain',
  archived: 'Archive'
};

@Component({
  selector: 'app-tournament-listing',
  imports: [ReactiveFormsModule, Button, Modal, Tag],
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


  getStatus(tournament: TournamentModel): TournamentStatus {
    return getCompetitionStatus(tournament);
  }

  getStatusVariant(status: TournamentStatus): TagVariant {
    return COMPETITION_STATUS_VARIANT[status];
  }

  getStatusLabel(status: TournamentStatus): string {
    return COMPETITION_STATUS_LABEL[status];
  }


}
