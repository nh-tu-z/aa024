import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../../global-state/reducers/user.reducer';
import { Observable } from 'rxjs';
import { login } from '../../global-state/actions/user.actions';
import { FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  user$: Observable<UserState>;

  loginSuccess = false

  user = {
    email: '',
    password: ''
  };

  constructor(
    private store: Store<{ user: UserState }>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.user$ = this.store.select('user');
  }

  ngOnInit(): void {
    // this.user$.subscribe({
    //   next: (user) => {
    //     console.log(user);
    //   }
    // });
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const userData = localStorage.getItem(this.user.email)
      if (userData) {
        const userDataJson = JSON.parse(userData)
        if (this.user.password === userDataJson['password']) {
          this.loginSuccess = true
          this.store.dispatch(login({ userName: userDataJson['username'], password: userDataJson['password'] }))
          setTimeout(() => { this.router.navigate(['/dashboard']); }, 5000)
        }
      }

      // Optionally, reset the form
      form.resetForm();
    }
  }
}
