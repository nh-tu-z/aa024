import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/user.actions';

export type User = {
    userName: string,
    email: string,
    token: string
}

export const initialUserState: User = {
    userName: '',
    email: '',
    token: ''
}
export const userReducer = createReducer(
    initialUserState, 
    on(login, (user, { userName, password }) => {
        console.log(user)
        console.log(userName)
        console.log(password)
        // if (userName === 'admin' && password === 'admin') {
        //     return {
        //         userName: 'admin',
        //         email: 'admin@gmail.com',
        //         token: '123456789'
        //     }
        // }
        return user;
    }),
    on(logout, (user) => user)
)