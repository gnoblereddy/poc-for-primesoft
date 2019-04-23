import signUpReducer from './client/src/signUp/reducer';
import loginReducer from './client/src/login/reducer';
import dashboardReducer from './client/src/dashboard/reducer';

var rootReducer = {
    'registrationData': signUpReducer,
    'login': loginReducer,
    'dashboard': dashboardReducer
}

export default rootReducer;