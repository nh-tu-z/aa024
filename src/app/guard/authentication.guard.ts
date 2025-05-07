import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from '../global-state/reducers/user.reducer';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<{ user: UserState }>);
  let user$ = store.select<UserState>(appState => appState.user);
  user$.subscribe({
    next: (user) => {
      console.log(user);
    }
  })
  return true;
};
