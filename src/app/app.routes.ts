import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    { path: 'login', component: LoginformComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterformComponent },
    { path: 'dashboard', component: DashboardComponent },
];
