export interface Match {
  id?: number;
  datetime?: Date;
  opponent_team_id?: number;
  points_scored?: number;
}


export interface Team {
  id?: number;
  name?: string;
  total_points?: number;
  matches?: Match[]
}

export interface Nation {
  id?: number;
  name?: string;
  code_iso?: string;
  total_points?: number;
  teams?: Team[];
}

export interface TournamentModel {
  id: number;
  name?: string | null;
  nations?: Nation[];
}

export interface MapModel {
  id: number;
  name: string;
}
