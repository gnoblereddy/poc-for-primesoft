import { SET_DASHBOARD_PENDING, SET_DASHBOARD_SUCCESS, SET_DASHBOARD_ERROR } from './constants';

import callDashboardApi from './services';

function setDashboardPending(isLoading) {
  return {
    type: SET_DASHBOARD_PENDING,
    isLoading
  };
}

function setDashboardSuccess(successData) {
  return {
    type: SET_DASHBOARD_SUCCESS,
    successData
  };
}

function setDashboardErrorData(errorData) {
  return {
    type: SET_DASHBOARD_ERROR,
    errorData
  }
}


export function dashboardAction(dashboardData) {
  return dispatch => {
    dispatch(setDashboardPending(true));
    dispatch(setDashboardSuccess(null));
    dispatch(setDashboardErrorData(null));

    callDashboardApi(dashboardData, response => {
      if (response.status) {
        // localStorage.setItem('userAuthToken', response.result.data.userAuthToken);
        dispatch(setDashboardSuccess(response.result));
        dispatch(setDashboardErrorData(null));
      } else {
        // dispatch(setLoginErrorData(response.result.message));
      }
    });
  }
}