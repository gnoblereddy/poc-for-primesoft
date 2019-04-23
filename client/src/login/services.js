import utils from '../utils';

export default function callLoginApi(loginData, callback) {
	// console.log("callPatientRegistrationApi request data  ---- ", loginData);
	utils.httpRequest('/login', 'post', loginData, (response) => {
		// console.log("callPatientRegistrationApi response data  ---- ", response);
		callback(response);
	});
}