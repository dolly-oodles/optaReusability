import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
    selector: 'app-registerform',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './registerform.component.html',
    styleUrl: './registerform.component.css'
})
export class RegisterformComponent {

    registerForm: FormGroup;

    constructor(public fb: FormBuilder, public authService: AuthenticationService, public router: Router) {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    async onSubmit() {
        if (this.registerForm.valid) {
            try {
                await this.authService.signUp(this.registerForm.value);
                this.router.navigate(['/login']);
            } catch (error) {
                console.error('Signup Failed:', error);
            }
        } else {
            console.log('Form Invalid');
        }
    }

}
