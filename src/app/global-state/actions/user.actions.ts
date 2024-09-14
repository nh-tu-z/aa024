import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login Page] Login', props<{ userName: string, password: string }>());
export const logout = createAction('');