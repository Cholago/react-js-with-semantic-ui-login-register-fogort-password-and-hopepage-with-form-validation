import React from 'react'
import { Button, Grid, Form, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import './App.css';

//valid email regex
const validEmailRegex = RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: "",
                password: ""
            },
            errors: {
                email: false,
                password: false,
            },
            loading: false,
            buttonDisabled: true,
            buttonText: "Login",
            redirect: false
        };
    }

    myChangeHandler = (event) => {
        let { name, value } = event.target;
        const data = this.state.data;
        const errors = this.state.errors;
        switch (name) {
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
            default:
                break;
        }
        this.setState({ data, [name]: value, errors, email: value, errors, password: value });

    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const data = this.state.data;
        const errors = this.state.errors;
        let valid = false;

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
            this.setState({ errors, password: false })
            valid = true;
        }
        //If form is valid
        if (valid) {
            this.whileSigningIn();
        }
    }

    whileSigningIn() {
        this.setState({ buttonText: "Loading..", loading: true });
        setTimeout(() => {
            const data = this.state.data;
            data.email = "";
            data.password = "";
            this.setState({ buttonText: "Login", loading: false, redirect: true, data, email: "", data, password: "" });
            /*
            Swal.fire(
                'Successfull!',
                'Account not found.',
                'success'
            )
            */
        }, 2000);
    }

    render() {
        const { data, errors } = this.state;
        if (this.state.redirect) {
            return <Redirect to={"/"} />;
        }

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 350 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        Login
                    </Header>
                    <Form size='large' loading={this.state.loading} onSubmit={this.mySubmitHandler}>
                        <Segment raised>
                            <Form.Input
                                fluid icon='envelope'
                                iconPosition='left'
                                placeholder='E-mail address'
                                //error={{ content: 'Please enter your first name' }}
                                error={errors.email}
                                type='email'
                                value={data.email}
                                name="email"
                                onChange={this.myChangeHandler}

                            />
                            <Form.Input
                                fluid icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                error={errors.password}
                                type='password'
                                value={data.password}
                                name="password"
                                onChange={this.myChangeHandler}
                            />
                            <Button color='blue' fluid size='small' disabled={this.state.loading} type='submit'>{this.state.buttonText}</Button>
                            <p>Not registered? <Link to="/signup">Sign up</Link></p>
                            <p><Link to="/forgotpassword">Forgot password</Link></p>
                        </Segment>
                    </Form>

                </Grid.Column>
            </Grid>
        );
    }

}
export default Login;