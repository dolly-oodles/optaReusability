
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-loginform',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './loginform.component.html',
    styleUrl: './loginform.component.css'
})
export class LoginformComponent {
    loginForm: FormGroup;

    constructor(public fb: FormBuilder, public authService: AuthenticationService, public router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    async onSubmit() {
        if (this.loginForm.valid) {
            try {
                const response = await this.authService.login(this.loginForm.value);

                // ✅ Extract token from response headers
                const token = response.headers.get('Authorization');

                if (token) {
                    localStorage.setItem('authToken', token);  // ✅ Store token in localStorage
                    console.log('Login Successful:', response.body);
                    this.router.navigate(['/dashboard']); // ✅ Redirect to dashboard
                } else {
                    console.error('No token received');
                }
            } catch (error) {
                console.error('Login Failed:', error);
            }
        }
    }


}


