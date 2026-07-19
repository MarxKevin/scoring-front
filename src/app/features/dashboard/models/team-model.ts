import { Match } from "./match-model"

export interface Team {
  id?: number;
  name?: string;
  total_points?: number;
  matches?: Match[]
}