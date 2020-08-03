import React from 'react';
import { Button } from 'semantic-ui-react'
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.color == "red") {
                this.setState({ color: "blue" });
            }
            else {
                this.setState({ color: "red" });
            }
        }, 2000)
    }
    changeColor = () => {
        if (this.state.color == "red") {
            this.setState({ color: "blue" });
        }
        else {
            this.setState({ color: "red" });
        }
    }
    changeModel = () => {
        if (this.state.model == "Mustang") {
            this.setState({ model: "Freeman" });
        }
        else {
            this.setState({ model: "Mustang" });
        }
    }
    render() {
        return (
            <div>
                <h4>My {this.state.brand}</h4>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>

                <Button onClick={this.changeColor}>Change color</Button>
                <Button primary onClick={this.changeModel}>Change model</Button>

            </div>
        );
    }
}
export default Car