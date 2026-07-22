import { Team } from './team-model'

export interface Nation {
  id?: number;
  name?: string;
  code_iso?: string;
  total_points?: number;
  teams?: Team[];
}