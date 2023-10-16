import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { IUser } from './user';

export const userFeatureKey = 'usersState';

export interface State {
  users: IUser[],
  error: string
}

export const initialState: State = {
  users: [],
  error : ''

};

export const reducer = createReducer(
  initialState,
);

