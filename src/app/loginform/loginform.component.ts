
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
    selector: 'app-loginform',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './loginform.component.html',
    styleUrl: './loginform.component.css'
})
export class LoginformComponent {
    loginForm: FormGroup;

    constructor(public fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        console.log('login');

    }

    onSubmit() {
        if (this.loginForm.valid) {
            console.log('Login successful', this.loginForm.value);
        }
    }

}


