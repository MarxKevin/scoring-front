import { Nation } from "./nation-model"

export interface TournamentModel {
  id: number;
  name?: string | null;
  nations?: Nation[];
}
