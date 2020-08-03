import React from 'react';
import {
    Container,
    Image,
    Segment,
    List
} from 'semantic-ui-react'
import Logo from "../assets/images/logo.png";

function Footer() {
    return (
        <Segment color='blue' inverted vertical style={{ margin: '1em 0em 0em' }}>
            <Container textAlign='center'>
                <Image centered size='mini' src={Logo} />
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                        Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                </List>
            </Container>
        </Segment>
    );
}
export default Footer