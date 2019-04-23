import utils from '../utils';

export default function callSignUpApi(registrationData, callback) {
	console.log("callPatientRegistrationApi request data  ---- ", registrationData);
	utils.httpRequest('/signup', 'post', registrationData, (response) => {
		console.log("callPatientRegistrationApi response data  ---- ", response);
		callback(response);
	});
}