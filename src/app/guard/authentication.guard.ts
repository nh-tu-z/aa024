import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { UserState } from '../global-state/reducers/user.reducer';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<{ user: UserState }>);
  const router = inject(Router);
  let user$ = store.select<UserState>(appState => appState.user);
  user$.subscribe({
    next: (user) => {
      console.log(user);
    }
  })
  // return store.select<UserState>(state => state.user).pipe(
  //   take(1),
  //   map(userState => {
  //     // Replace this condition with your actual authentication logic
  //     console.log(userState.userName)
  //     const isAuthenticated = !!userState.userName;
  //     if (!isAuthenticated) {
  //       router.navigate(['/login']);
  //       return false;
  //     }
  //     return true;
  //   })
  // );
  return true;
};
