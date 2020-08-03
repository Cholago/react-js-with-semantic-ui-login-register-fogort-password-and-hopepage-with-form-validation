import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Button } from 'semantic-ui-react';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fast: "",
            last: ""
        };
    }
    render() {
        return (
            <Form ref="form" onSubmit={this.onSubmit} >
                <Input
                    type="text"
                    label="Fast"
                    onChange={(e) => { this.setState({ fast: e.target.value }) }}
                    value={this.state.fast}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    width={6}
                />
                <Input
                    type="text"
                    label="Last"
                    onChange={(e) => { this.setState({ last: e.target.value }) }}
                    value={this.state.last}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    width={6}
                />
                <Button color="teal">Submit</Button>
            </Form>
        )
    }
}
export default Test