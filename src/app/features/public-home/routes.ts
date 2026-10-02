import { Routes } from '@angular/router';

export const PUBLIC_HOME_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
    },
    {
        path: 'homepage',
        loadComponent: () => 
            import('./pages/homepage/homepage')
            .then(c => c.Homepage)
    }

];