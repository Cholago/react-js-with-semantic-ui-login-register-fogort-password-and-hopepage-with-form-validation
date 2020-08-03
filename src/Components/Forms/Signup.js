import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

//valid email regex
const validEmailRegex = RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            errors: {
                firstName: false,
                lastName: false,
                email: false,
                password: false,
                confirmPassword: false
            },
            loading: false,
            buttonDisabled: true,
            buttonText: "Sign up"
        };
    }

    myChangeHandler = (event) => {
        let { name, value } = event.target;
        const data = this.state.data;
        const errors = this.state.errors;
        switch (name) {
            case 'firstName':
                data.firstName = value;
                if (value == "") {
                    errors.firstName = "First name is required.";
                }
                else if (value.length < 2) {
                    errors.firstName = "First name must be at least 2 characters long";
                }
                else {
                    errors.firstName = false;
                }
                //this.setState({ errors, password: value, errors, passwordMsg: value });
                break;
            case 'lastName':
                data.lastName = value;
                if (value == "") {
                    errors.lastName = "Last name is required.";
                }
                else if (value.length < 2) {
                    errors.lastName = "Last name must be at least 2 characters long";
                }
                else {
                    errors.lastName = false;
                }
                //this.setState({ errors, password: value, errors, passwordMsg: value });
                break;
            case 'email':
                data.email = value;
                if (value == "") {
                    errors.email = "Email is required.";
                }
                else if (!validEmailRegex.test(value)) {
                    errors.email = "Please enter a valid email address.";
                }
                else {
                    errors.email = false;
                }
                //this.setState({ errors, email: value, errors, emailMsg: value });
                break;
            case 'password':
                data.password = value;
                if (value == "") {
                    errors.password = "Password is required.";
                }
                else if (value.length < 8) {
                    errors.password = "Password must be at least 8 characters long";
                }
                else {
                    errors.password = false;
                }
                //this.setState({ errors, password: value, errors, passwordMsg: value });
                break;
            case 'confirmPassword':
                data.confirmPassword = value;
                if (value == "") {
                    errors.confirmPassword = "Retype your password";
                }
                else if (!(value == data.password)) {
                    errors.confirmPassword = "Password did not match!";
                }
                else {
                    errors.confirmPassword = false;
                }
                //this.setState({ errors, password: value, errors, passwordMsg: value });
                break;

            default:
                break;
        }
        this.setState({ data, [name]: value, errors, firstName: value, errors, lastName: value, errors, email: value, errors, password: value, errors, confirmPassword: value });

    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        const data = this.state.data;
        const errors = this.state.errors;
        let valid = false;

        if (data.firstName == "") {
            errors.firstName = "First name is required.";
            this.setState({ errors, firstName: "First name is required." });
            valid = false;
        }
        else if (data.firstName.length < 2) {
            errors.firstName = "First name must be at least 2 characters long";
            this.setState({ errors, firstName: "First name must be at least 2 characters long" });
            valid = false;
        }
        else {
            errors.firstName = false;
            this.setState({ errors, firstName: false });
            valid = true;
        }

        if (data.lastName == "") {
            errors.lastName = "Last name is required";
            this.setState({ errors, lastName: "Last name is required" });
            valid = false;
        }
        else if (data.lastName.length < 2) {
            errors.lastName = "Last name must be at least 2 characters long";
            this.setState({ errors, lastName: "Last name must be at least 2 characters long" });
            valid = false;
        }
        else {
            errors.lastName = false;
            this.setState({ errors, lastName: false });
            valid = true;
        }

        if (data.email == "") {
            errors.email = "Email is required.";
            this.setState({ errors, email: "Email is required." });
            valid = false;
        }
        else if (!validEmailRegex.test(data.email)) {
            errors.email = "Please enter a valid email address.";
            this.setState({ errors, email: "Please enter a valid email address." });
            valid = false;
        }
        else {
            errors.email = false;
            this.setState({ errors, email: false });
            valid = true;
        }

        if (data.password == "") {
            errors.password = "Password is required.";
            this.setState({ errors, password: "Password is required" });
            valid = false;
        }
        else if (data.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
            this.setState({ errors, password: "Password must be at least 8 characters long" });
            valid = false;
        }
        else {
            errors.password = false;
            this.setState({ errors, password: false });
            valid = true;
        }

        if (data.confirmPassword == "") {
            errors.confirmPassword = "Retype your password";
            this.setState({ errors, confirmPassword: "Retype your password" });
            valid = false;
        }
        else if (!(data.confirmPassword == data.password)) {
            errors.confirmPassword = "Password did not match!";
            this.setState({ errors, confirmPassword: "Password did not match!" });
            valid = false;
        }
        else {
            errors.confirmPassword = false;
            this.setState({ errors, confirmPassword: false });
            valid = true;
        }
        //If form is valid
        if (valid) {
            this.whileSigningUp();
        }
    }

    whileSigningUp() {
        this.setState({ buttonText: "Signing up..", loading: true });
        setTimeout(() => {
            const data = this.state.data;
            data.firstName = "";
            data.lastName = "";
            data.email = "";
            data.password = "";
            data.confirmPassword = "";
            this.setState({ buttonText: "Sign up", loading: false, data, firstName: "", data, lastName: "", data, email: "", data, password: "", data, confirmPassword: "" });
            Swal.fire(
                'Successfull!',
                'Check on your email inbox we sent a varification link.',
                'success'
            )
        }, 2000);
    }

    render() {
        const { data, errors } = this.state;
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 350 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        Create account
                    </Header>
                    <Form size='large' loading={this.state.loading} onSubmit={this.mySubmitHandler}>
                        <Segment raised>
                            <Form.Input
                                fluid icon='user'
                                iconPosition='left'
                                placeholder='First name'
                                type='text'
                                error={errors.firstName}
                                value={data.firstName}
                                name="firstName"
                                onChange={this.myChangeHandler}
                            />
                            <Form.Input
                                fluid icon='user'
                                iconPosition='left'
                                placeholder='Last name'
                                type='text'
                                error={errors.lastName}
                                value={data.lastName}
                                name="lastName"
                                onChange={this.myChangeHandler}
                            />
                            <Form.Input
                                fluid icon='envelope'
                                iconPosition='left'
                                placeholder='E-mail address'
                                type='email'
                                error={errors.email}
                                value={data.email}
                                name="email"
                                onChange={this.myChangeHandler}
                            />
                            <Form.Input
                                fluid icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                error={errors.password}
                                value={data.password}
                                name="password"
                                onChange={this.myChangeHandler}
                            />
                            <Form.Input
                                fluid icon='lock'
                                iconPosition='left'
                                placeholder='Retype password'
                                type='password'
                                error={errors.confirmPassword}
                                value={data.confirmPassword}
                                name="confirmPassword"
                                onChange={this.myChangeHandler}
                            />
                            <Button color='blue' fluid size='small' disabled={this.state.loading} type='submit'>{this.state.buttonText}</Button>
                            <p>Registered? <Link to="/login">Log in</Link></p>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }

}
export default Signup