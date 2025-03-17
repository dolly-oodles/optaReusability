import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginformComponent },
    { path: 'register', component: RegisterformComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];
