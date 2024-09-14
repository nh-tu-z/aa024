import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../global-state/reducers/user.reducer';
import { Observable } from 'rxjs';
import { login } from '../../global-state/actions/user.actions';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  user$: Observable<User>;
  loginForm = this.formBuilder.group({
    userName: "",
    password: ""
  });
  
  constructor(
    private store: Store<{ user: User}>,
    private formBuilder: FormBuilder
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

  onSubmit() {
    this.store.dispatch(
      login({ 
        userName: this.loginForm.value.userName ?? "", 
        password: this.loginForm.value.password ?? "" 
      }));
  }
}
