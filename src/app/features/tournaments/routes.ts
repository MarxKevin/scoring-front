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
            import('./pages/tournaments/tournaments')
            .then(c => c.Tournaments)
    }

];