import { SET_DASHBOARD_PENDING, SET_DASHBOARD_SUCCESS, SET_DASHBOARD_ERROR } from './constants';


const initialState = {
  isLoading: false,
  onSuccess: null,
  onError: null
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DASHBOARD_PENDING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });

    case SET_DASHBOARD_SUCCESS:
      return Object.assign({}, state, {
        onSuccess: action.successData
      });

    case SET_DASHBOARD_ERROR:
      return Object.assign({}, state, {
        onError: action.errorData
      });

    default:
      return state;
  }
}