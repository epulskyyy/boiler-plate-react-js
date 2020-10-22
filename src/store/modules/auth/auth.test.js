import { auth } from '../action-types';
import authReducers from './reducers';
import { initialState as state } from './reducers';

describe('Auth Reducer', () => {
  it('should return default state', () => {
    const newState = authReducers(undefined, {});
    expect(newState).toEqual(state);
  });
  it('should return new state if reciving type LOGIN_SUCCESS', () => {
    const newState = authReducers(undefined, {
      type: auth.LOGIN_SUCCESS,
      jwt: 'example123012391923',
      post: {},
      isChecked: false,
    });
    expect(newState).toEqual({
      ...state,
      isLoggedIn: true,
      token: 'example123012391923',
      post: {},
      isChecked: false,
      isLoading: false,
    });
  });
  it('should return new state if reciving type LOGOUT_SUCCESS', () => {
    const newState = authReducers(undefined, {
      type: auth.LOGOUT_SUCCESS,
    });
    expect(newState).toEqual({
      ...state,
      isLoggedIn: false,
      token: '',
    });
  });
});
