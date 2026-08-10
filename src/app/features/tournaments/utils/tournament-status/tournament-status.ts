import { TournamentModel } from "../../models/tournament-model";


export type CompetitionStatus =
  | 'ongoing'
  | 'upcoming'
  | 'archived';

  type TagVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export function getCompetitionStatus(tournament: TournamentModel): CompetitionStatus {

  const now = new Date();

  if (now < tournament.startDate) {
    return 'upcoming';
  }

  if (now > tournament.endDate) {
    return 'archived';
  }

  return 'ongoing';
}