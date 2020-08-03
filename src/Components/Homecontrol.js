import React from 'react'
import on from "../assets/images/switch_on.png";
import off from "../assets/images/switch_off.png";
import {
    Container,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react'
export default class Homecontrol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOne: "off",
            switchOneImage: off,

            switchTwo: "off",
            switchTwoImage: off,

            switchOne: "off",
            switchThreeImage: off,

            switchFour: "off",
            switchFourImage: off
        };
    }
    switchStateOne = () => {
        if (this.state.switchOne == "off") {
            this.setState({ switchOne: "on", switchOneImage: on });
        }
        else {
            this.setState({ switchOne: "off", switchOneImage: off });
        }
    }

    switchStateTwo = () => {
        if (this.state.switchTwo == "off") {
            this.setState({ switchTwo: "on", switchTwoImage: on });
        }
        else {
            this.setState({ switchTwo: "off", switchTwoImage: off });
        }
    }

    switchStateThree = () => {
        if (this.state.switchThree == "off") {
            this.setState({ switchThree: "on", switchThreeImage: on });
        }
        else {
            this.setState({ switchThree: "off", switchThreeImage: off });
        }
    }

    switchStateFour = () => {
        if (this.state.switchFour == "off") {
            this.setState({ switchFour: "on", switchFourImage: on });
        }
        else {
            this.setState({ switchFour: "off", switchFourImage: off });
        }
    }

    render() {
        const style = {
            h1: {
                marginTop: '1em',
            },
            h2: {
                margin: '4em 0em 2em',
            },
            h3: {
                marginTop: '0em',
                padding: '1em 0em',
            },
            p: {
                textAlign: 'center'
            },
            last: {
                marginBottom: '100px',
            },
        }
        return (
            <div>
                <Header as='h3' content='Click on the power button to control your house lights' style={style.h3} textAlign='center' />

                <Container style={style.last}>
                    <Segment color='blue'>

                        <Grid relaxed>
                            <Grid.Column only='mobile' mobile={16}>
                                <Segment>
                                    <Image src={this.state.switchOneImage} size='small' centered onClick={this.switchStateOne} />
                                    <p style={style.p}>Sitting room light {this.state.switchOne}</p>
                                </Segment>
                            </Grid.Column >
                            <Grid.Column only='mobile' mobile={16}>
                                <Segment>
                                    <Image src={this.state.switchTwoImage} size='small' centered onClick={this.switchStateTwo} />
                                    <p style={style.p}>Sitting room light {this.state.switchTwo}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column only='mobile' mobile={16}>
                                <Segment>
                                    <Image src={this.state.switchThreeImage} size='small' centered onClick={this.switchStateThree} />
                                    <p style={style.p}>Sitting room light {this.state.switchThree}</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column only='mobile' mobile={16}>
                                <Segment>
                                    <Image src={this.state.switchFourImage} size='small' centered onClick={this.switchStateFour} />
                                    <p style={style.p}>Sitting room light {this.state.switchFour}</p>
                                </Segment>
                            </Grid.Column>

                            <Grid.Row only='computer tablet' columns={4}>
                                <Grid.Column only='computer tablet' columns={4}>
                                    <Segment>
                                        <Image src={this.state.switchOneImage} size='small' centered onClick={this.switchStateOne} />
                                        <p style={style.p}>Sitting room light {this.state.switchOne}</p>
                                    </Segment>
                                </Grid.Column >
                                <Grid.Column only='computer tablet' columns={4}>
                                    <Segment>
                                        <Image src={this.state.switchTwoImage} size='small' centered onClick={this.switchStateTwo} />
                                        <p style={style.p}>Sitting room light {this.state.switchTwo}</p>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column only='computer tablet' columns={4}>
                                    <Segment>
                                        <Image src={this.state.switchThreeImage} size='small' centered onClick={this.switchStateThree} />
                                        <p style={style.p}>Sitting room light {this.state.switchThree}</p>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column only='computer tablet' columns={4}>
                                    <Segment>
                                        <Image src={this.state.switchFourImage} size='small' centered onClick={this.switchStateFour} />
                                        <p style={style.p}>Sitting room light {this.state.switchFour}</p>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </div>
        );
    }
}