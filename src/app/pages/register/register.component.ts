import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      if (!localStorage.getItem(this.user.email)) {
        localStorage.setItem(this.user.email, JSON.stringify(this.user));
      }

      // Optionally, reset the form
      form.resetForm();
    }
  }
}
