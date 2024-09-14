import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { LoginComponent } from './pages/login/login.component';
import { authenticationGuard } from './guard/authentication.guard';

export const routes: Routes = [
    {
        title: 'Login',
        path: 'login',
        component: LoginComponent
    },
    {
        title: 'Dashboard',
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authenticationGuard]
    },
    {
        title: 'Add Item',
        path: 'add-item',
        component: AddItemComponent
    },
    {
        title: 'Edit Item',
        path: 'edit-item/:id',
        component: EditItemComponent
    },
    {
        title: 'Not Found',
        path: '**',
        component: NotFoundComponent
    }
];
