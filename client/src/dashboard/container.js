import React from 'react';
import { connect } from 'react-redux';
import DashboardForm from './form';

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashboardForm loginData={this.props.reg.name}/>
            </div>
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = function (state) {
    console.log("dashboard==",state);
    return {
        isLoading: state.dashboard.isLoading,
        onSuccess: state.dashboard.onSuccess,
        onError: state.dashboard.onError,
        reg:state.login.onSuccess
    }
}


/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        // dashboardUserAction: (dashboardRequestData) => dispatch(dashboardUserAction(dashboardRequestData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);