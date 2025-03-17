import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    constructor(public authService: AuthenticationService, public router: Router, @Inject(PLATFORM_ID) public platformId: Object) { }

    isAuthenticated(): boolean {
        if (isPlatformBrowser(this.platformId)) {
            return !!localStorage.getItem('authToken');
        }
        return false;
    }
    async logout(): Promise<void> {
        try {
            if (isPlatformBrowser(this.platformId)) {
                const token = localStorage.getItem('authToken');
                if (token) {
                    localStorage.removeItem('authToken');
                    console.log('Logout Successful');
                    this.router.navigate(['/login']);
                } else {
                    console.warn('No token found');
                }
            }
        } catch (error) {
            console.error('Logout Failed:', error);
        }
    }

}
