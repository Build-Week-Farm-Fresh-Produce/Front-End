import React, { Component } from "react";
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
        const { values } = this.props;
        

		return (
			<div>
				<React.Fragment>
                    <nav> Enter user details</nav>
                     
                </React.Fragment>{" "}
			</div>
		);
	}
}

export default FormUserDetails;
