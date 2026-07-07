import { Routes } from '@angular/router';
import { Homepage } from './pages/public/homepage/homepage';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { NotFound } from './pages/not-found/not-found';
import { Tournament } from './components/tournament/tournament';

export const routes: Routes = [
    {path: '', component: Homepage},
    {path: 'dashboard', component: Dashboard},
    {path: 'tournament/:id', component: Tournament},
    {path: '**', component: NotFound},
];
