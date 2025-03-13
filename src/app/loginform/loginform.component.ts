
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
    selector: 'app-loginform',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './loginform.component.html',
    styleUrl: './loginform.component.css'
})
export class LoginformComponent {
    loginForm: FormGroup;

    constructor(public fb: FormBuilder, public authService: AuthenticationService, public router: Router, public route: ActivatedRoute) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    async onSubmit() {
        if (this.loginForm.valid) {
            try {
                const response = await this.authService.login(this.loginForm.value);
                const token = response?.body.data?.accessToken

                if (token) {
                    localStorage.setItem('authToken', token);
                    this.loginForm.reset();
                    this.router.navigate(['/dashboard']);
                } else {
                    console.error('No token received');
                }
            } catch (error) {
                console.error('Login Failed:', error);
            }
        }
    }


}


