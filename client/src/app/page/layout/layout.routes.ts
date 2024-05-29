import { LayoutComponent } from './layout.component';

import { Routes } from '@angular/router';

export const LAYOUT_ROUTES: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'base/profile',
          pathMatch: 'full',
        },
        {
          path: 'base/profile',
          loadChildren: () =>
            import('../layout/profile/profile.routes').then((m) => m.PROFILE_ROUTERS),
        },
        {
          path: 'base/create-profile',
          loadChildren: () =>
            import('../layout/create-profile/create-profile.routes').then((m) => m.CREATEPROFILE_ROUTERS),
        },
       
      ],
    },
  ];