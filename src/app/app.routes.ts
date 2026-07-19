import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';
import { AdminLayout } from './layout/admin-layout/admin-layout';

export const routes: Routes = [
    /*{path: '', component: Homepage},
    {path: 'dashboard', component: Dashboard},
    {path: 'tournament/:id', component: Tournament},
    {path: '**', component: NotFound},*/

    {
        path: '',
        component: PublicLayout,
        children: [
            {
                path:'',
                loadChildren: () =>
                    import('./features/public-home/routes')
                    .then(m => m.PUBLIC_HOME_ROUTES)
            },
            {
                path:'competition',
                loadChildren: () =>
                    import('./features/competitions/routes')
                    .then(m => m.COMPETITIONS_ROUTES)
            },
        ]
    },
    {
        path: 'admin',
        component: AdminLayout,
        canActivate: [],
        children: [
            {
                path: '',
                loadChildren: () => import('./features/admin/routes')
                .then(m => m.ADMIN_ROUTES)
            }
        ]
    },
    {
        path: '**',
        loadComponent: () =>
            import('./features/errors/pages/not-found/not-found')
            .then(c => c.NotFound)
    }
];
