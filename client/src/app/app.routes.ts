import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./page/layout/layout.routes').then((m) => m.LAYOUT_ROUTES),
    },
];
