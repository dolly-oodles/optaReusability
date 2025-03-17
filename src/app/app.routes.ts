import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { DummyComponent } from './dummy/dummy.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginformComponent },
    { path: 'register', component: RegisterformComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'employee-scheduling', pathMatch: 'full' },
            { path: 'vehicle-routing', component: DummyComponent },
            { path: 'load-distribution', component: DummyComponent },
            { path: 'call-center-scheduling', component: DummyComponent },
            { path: 'time-table-scheduling', component: DummyComponent },

        ]
    }
];
