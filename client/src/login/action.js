import { SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR } from './constants';

import callLoginApi from './services';

function setLoginPending(isLoading) {
  return {
    type: SET_LOGIN_PENDING,
    isLoading
  };
}

function setLoginSuccess(successData) {
  return {
    type: SET_LOGIN_SUCCESS,
    successData
  };
}

function setLoginErrorData(errorData) {
  return {
    type: SET_LOGIN_ERROR,
    errorData
  }
}


export function loginUserAction(loginData) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(null));
    dispatch(setLoginErrorData(null));

    callLoginApi(loginData, response => {
      if (response.status) {
        // localStorage.setItem('userAuthToken', response.result.data.userAuthToken);
        dispatch(setLoginSuccess(response.result));
        dispatch(setLoginErrorData(null));
      } else {
        // dispatch(setLoginErrorData(response.result.message));
      }
    });
  }
}