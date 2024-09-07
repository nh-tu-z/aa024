import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'add-item',
        component: AddItemComponent
    },
    {
        path: 'edit-item/:id',
        component: EditItemComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
