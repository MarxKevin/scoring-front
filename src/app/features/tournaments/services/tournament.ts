import { Injectable } from '@angular/core';
import { TournamentModel } from '../models/tournament.model';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
    private tournaments: Array<TournamentModel> = [
    {
      id: 1,
      name: "Tournament Février 2027",
      nations: [
        {
          id: 1,
          name: "Belgique",
          code_iso: "BE",
          total_points: 100,
          teams: [
            {
              id: 1,
              name: "Jaffa",
              total_points: 80,
              matches: [
                {
                  id:1,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:30
                },
                {
                  id:2,
                  datetime: new Date(),
                  opponent_team_id: 3,
                  points_scored:50
                }
              ]
            },
            {
              id: 4,
              name: "Tok'Ra",
              total_points: 20,
              matches: [
                {
                  id:3,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:5
                },
                {
                  id:4,
                  datetime: new Date(),
                  opponent_team_id: 3,
                  points_scored:15
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "France",
          code_iso: "FR",
          total_points: 98,
          teams: [
            {
              id: 2,
              name: "Medusa",
              total_points: 90,
              matches: [
                {
                  id:5,
                  datetime: new Date(),
                  opponent_team_id: 1,
                  points_scored:50
                },
                {
                  id:6,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:40
                }
              ]
            },
            {
              id: 3,
              name: "Abyssal Soldier",
              total_points: 8,
              matches: [
                {
                  id:7,
                  datetime: new Date(),
                  opponent_team_id: 1,
                  points_scored:3
                },
                {
                  id:8,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:5
                }
              ]
            }
          ]
        } 
      ],
      status: "ongoing",
      game: "EVA Battle Arena",
      startDate: new Date("10-20-2026"),
      endDate: null
    },
    {
      id: 2,
      name: "Tournament Avril 2026",
      nations: [],
      status: "archived",
      game: "EVA BATTLE ARENA",
      startDate: new Date("10-15-2026"),
      endDate: new Date("10-20-2026")
    },
    {
      id: 3,
      name: "Tournament Octobre 2025",
      nations: [],
      status: "archived",
      game: "EVA BATTLE ARENA",
      startDate: new Date("10-20-2026"),
      endDate: new Date("10-20-2026")
    },
    {
      id: 1,
      name: "Tournament Mars 2027",
      nations: [
        {
          id: 1,
          name: "Belgique",
          code_iso: "BE",
          total_points: 100,
          teams: [
            {
              id: 1,
              name: "Jaffa",
              total_points: 80,
              matches: [
                {
                  id:1,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:30
                },
                {
                  id:2,
                  datetime: new Date(),
                  opponent_team_id: 3,
                  points_scored:50
                }
              ]
            },
            {
              id: 4,
              name: "Tok'Ra",
              total_points: 20,
              matches: [
                {
                  id:3,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:5
                },
                {
                  id:4,
                  datetime: new Date(),
                  opponent_team_id: 3,
                  points_scored:15
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "France",
          code_iso: "FR",
          total_points: 98,
          teams: [
            {
              id: 2,
              name: "Medusa",
              total_points: 90,
              matches: [
                {
                  id:5,
                  datetime: new Date(),
                  opponent_team_id: 1,
                  points_scored:50
                },
                {
                  id:6,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:40
                }
              ]
            },
            {
              id: 3,
              name: "Abyssal Soldier",
              total_points: 8,
              matches: [
                {
                  id:7,
                  datetime: new Date(),
                  opponent_team_id: 1,
                  points_scored:3
                },
                {
                  id:8,
                  datetime: new Date(),
                  opponent_team_id: 2,
                  points_scored:5
                }
              ]
            }
          ]
        } 
      ],
      status: "upcoming",
      game: "EVA BATTLE ARENA",
      startDate: new Date("10-20-2026"),
      endDate: new Date("10-20-2026")
    },
  ];

  getTournaments(): Array<TournamentModel> {
    return [...this.tournaments];
  }

  getOneTournament(id: number) {
    return this.tournaments.filter((tournament) => tournament.id === id)[0]
  }

  createTournament(item: TournamentModel): void {
    this.tournaments.push(item);
  }

  updateTournament(item: TournamentModel): void {
    
  }

  deleteTournament(id: number) {
    this.tournaments = this.tournaments.filter((tournament) => tournament.id !== id)
  }

  getCurrentTournament(){
    return this.tournaments.filter((tournament) => tournament.status == "ongoing")[0]
  }
}
