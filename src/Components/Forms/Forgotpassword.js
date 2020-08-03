import React from 'react'
import { Button, Grid, Form, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const validEmailRegex = RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

class Forgotpassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            errorMessage: false,
            loading: false,
            buttonDisabled: true,
            buttonText: "Reset password"
        };
    }

    myChangeHandler = (event) => {
        let email = event.target.value;
        this.setState({ email: email });
        if (email == "") {
            this.setState({ errorMessage: "Email is required.", buttonDisabled: true });
        }
        else if (!validEmailRegex.test(email)) {
            this.setState({ errorMessage: "Please enter a valid email address.", buttonDisabled: true });
        }
        else {
            this.setState({ errorMessage: false, buttonDisabled: false });
        }

    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.email == "") {
            this.setState({ errorMessage: "Email is required." });
        }
        else if (!validEmailRegex.test(this.state.email)) {
            this.setState({ errorMessage: "Please enter a valid email address." });
        }
        else {
            this.setState({ errorMessage: false });
            this.whileResetting();
        }

    }

    whileResetting() {
        this.setState({ buttonText: "Resetting..", loading: true });
        setTimeout(() => {
            this.setState({ buttonText: "Reset password", loading: false, email: "" });
            Swal.fire(
                'Successfull!',
                'Sent a password reset link to your email.',
                'success'
            )
        }, 2000);
        //alert("Created account with this email: " + this.state.email);
    }

    render() {

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 350 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        Forgot password
                    </Header>
                    <Form size='large' loading={this.state.loading} onSubmit={this.mySubmitHandler}>
                        <Segment raised>
                            <Form.Input
                                fluid icon='envelope'
                                iconPosition='left'
                                placeholder='E-mail address'
                                error={this.state.errorMessage}
                                type='email'
                                value={this.state.email}
                                disabled={this.state.loading}
                                name="email"
                                onChange={this.myChangeHandler}
                            />
                            <Button color='blue' fluid size='small' disabled={this.state.buttonDisabled} type='submit'>{this.state.buttonText}</Button>
                            <p><Link to="/login">Back to login page</Link></p>
                        </Segment>
                    </Form>

                </Grid.Column>
            </Grid>
        );
    }

}
export default Forgotpassword;