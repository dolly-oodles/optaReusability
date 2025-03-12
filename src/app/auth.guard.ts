import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthenticationService, public router: Router) { }

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            return true; // ✅ Allow access if authenticated
        } else {
            this.router.navigate(['/login']); // 🚫 Redirect to login if not authenticated
            return false;
        }
    }
}
