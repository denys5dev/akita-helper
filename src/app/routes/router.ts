import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PageNotFoundComponent } from '../layout/pages/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    {path: '',  redirectTo: '/home', pathMatch: 'full'},
    {path: '', component: LayoutComponent, 
        children: [
            { path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
]