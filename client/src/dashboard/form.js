import React from 'react';
import { Link } from 'react-router-dom';

export default class DashboardForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h4>User Name : {this.props.loginData.toUpperCase()}</h4>
                <h3>List of Products</h3><Link to={'/create-product'}>Add Products</Link>
            </div>
        )
    }
}