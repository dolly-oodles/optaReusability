import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ResourceService } from './resource.service';
import { API_URLS } from './api-urls';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(public http: HttpClient, public resourceService: ResourceService, @Inject(PLATFORM_ID) public platformId: Object) { }
    signUp(payload: any) {
        const url = `${API_URLS.signUp}`;
        return this.resourceService.postData(url, payload);
    }
    login(payload: any) {
        const url = `${API_URLS.login}`;
        return this.resourceService.postData(url, payload);
    }
    isAuthenticated(): boolean {
        if (isPlatformBrowser(this.platformId)) {
            return !!localStorage.getItem('authToken');  // ✅ Only access localStorage in browser
        }
        return false;
    }

    logout() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('authToken');  // ✅ Prevents error in SSR
        }
    }
}