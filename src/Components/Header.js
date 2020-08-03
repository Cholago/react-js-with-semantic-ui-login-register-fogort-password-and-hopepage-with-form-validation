import React from 'react'
import Logo from "../assets/images/logo.png";
import on from "../assets/images/switch_on.png";
import off from "../assets/images/switch_off.png";
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Divider,
    Menu,
    Segment,
    Step,
    Table,
    List
} from 'semantic-ui-react'

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

const ResponsiveLayout = () => (
    <div>
        <Header as='h1' content='My home' style={style.h1} textAlign='center' />
        <Container>
            <Menu stackable>
                <Menu.Item>
                    <img src={Logo} />
                </Menu.Item>
                <Menu.Item>Features</Menu.Item>
                <Menu.Item>Testimonials</Menu.Item>
                <Menu.Item>Sign-in</Menu.Item>
            </Menu>
        </Container>
    </div>
)

export default ResponsiveLayout