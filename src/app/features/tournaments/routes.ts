import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'tournaments',
        pathMatch: 'full'
    },
    {
        path: 'tournaments',
        loadComponent: () =>
            import('./pages/tournament-listing/tournament-listing')
            .then(c => c.TournamentListing)
    }

];