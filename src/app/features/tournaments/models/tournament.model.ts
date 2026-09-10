import { TournamentStatus } from "../models/tournament-status.model";
import { Nation } from "./nation.model"

export interface TournamentModel {
  id: number;
  name?: string | null;
  nations?: Nation[];
  status: TournamentStatus;
}

export type createTournament = Omit<TournamentModel, 'id'>;
