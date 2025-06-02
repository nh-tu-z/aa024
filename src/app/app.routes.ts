import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { LoginComponent } from './pages/login/login.component';
import { authenticationGuard } from './guard/authentication.guard';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        title: 'Home',
        path: '',
        // todo: using lazy load component
        component: HomeComponent
    },
    {
        title: 'Login',
        path: 'login',
        component: LoginComponent
    },
    {
        title: 'Register',
        path: 'register',
        component: RegisterComponent
    },
    {
        title: 'Dashboard',
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authenticationGuard]
    },
    {
        title: 'Cart',
        path: 'cart',
        component: CartComponent,
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
