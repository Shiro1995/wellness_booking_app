import { createSelector } from 'reselect';

export const authenticationState = state => state.authenState;

export const selectAuthenState = createSelector(authenticationState, authenState => authenState);
