import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
    selector: 'app-registerform',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './registerform.component.html',
    styleUrl: './registerform.component.css'
})
export class RegisterformComponent {

    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        if (this.registerForm.valid) {
            console.log('Form Data:', this.registerForm.value);
        } else {
            console.log('Form Invalid');
        }
    }
}
