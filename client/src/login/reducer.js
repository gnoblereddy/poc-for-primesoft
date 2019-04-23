import { SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR } from './constants';


const initialState = {
  isLoading: false,
  onSuccess: null,
  onError: null
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        onSuccess: action.successData
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        onError: action.errorData
      });

    default:
      return state;
  }
}