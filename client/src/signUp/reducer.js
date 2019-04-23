import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';


const initialState = {
  isLoading: false,
  onSuccess: null,
  onError: null
};

export default function signUpReducer(state = initialState, action) {
  console.log('sign up reducer called')
  switch (action.type) {
    case SIGNUP_PENDING:
    console.log('sign up reducer pending called')
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });

    case SIGNUP_SUCCESS:
    console.log('sign up reducer sucess called')
      // console.log("reducer signup success",action.successData)
      return Object.assign({}, state, {
        onSuccess: action.successData
      });

    case SIGNUP_ERROR:
    console.log('sign up reducer error called')
      return Object.assign({}, state, {
        onError: action.errorData
      });

    default:
      return state;
  }
}