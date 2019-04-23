import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './form';
import { signUpAction } from './actions';

class SignUpFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onSuccess: false
        }
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.onSuccess && nextprops.onSuccess != null && nextprops.onSuccess.statusCode != 404) {
            this.props.history.push('/');
        }
        if (nextprops.onSuccess && nextprops.onSuccess.statusCode == 404) {
            console.log('dsdddf--------------')
            this.setState({ onSuccess: true });
        }
        if (nextprops.onError) {
            this.props.history.push('/signUp');
        }
    }

    submitRegistration(formObject) {
        formObject['userName'] = formObject['email'];
        // console.log(" formObject ", formObject);
        this.props.signUpAction(formObject);
    }

    render() {
        console.log('this.state-------', this.state)

        let messages = {
            isLoading: this.props.isLoading,
            onSuccess: this.props.onSuccess,
            onError: this.props.onError
        };

        return (
            <div>
                <SignUpForm submitRegistration={this.submitRegistration} onSuccess={this.state.onSuccess} />
            </div>
        )
    }

}

/**
 * Map the state to props.
 */
const mapStateToProps = function (state) {
    console.log('sign up map state to props called')
    return {
        isLoading: state.registrationData.isLoading,
        onSuccess: state.registrationData.onSuccess,
        onError: state.registrationData.onError
    }
}


/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
    console.log('sign up map dispatch to props called')
    return {
        signUpAction: (registrationFormData) => dispatch(signUpAction(registrationFormData))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);