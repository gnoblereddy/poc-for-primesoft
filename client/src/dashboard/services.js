import utils from '../utils';

export default function callDashboardApi(dashboardData, callback) {
	// console.log("callPatientRegistrationApi request data  ---- ", loginData);
	utils.httpRequest('/dashboard', 'post', dashboardData, (response) => {
		// console.log("callPatientRegistrationApi response data  ---- ", response);
		callback(response);
	});
}