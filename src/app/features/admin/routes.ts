import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../tournaments/routes')
            .then(m => m.DASHBOARD_ROUTES)
    }

];