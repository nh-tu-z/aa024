import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../global-state/reducers/user.reducer';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<{ user: User}>);
  let user$ = store.select<User>(appState => appState.user);
  user$.subscribe({
    next: (user) => {
      console.log(user);
    }
  })
  return true;
};
