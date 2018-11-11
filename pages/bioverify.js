import React from 'react';
import { Main } from '../components/Main';
import { RobChat } from '../components/RobChat';
import { Container } from '../components/Container';
import styled from 'react-emotion';
import { COLORS } from '../style/constants';

const HeroSlice = styled('div')({
    background: COLORS.AccentBlue,
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
});

const LogoImg = styled('img')({
    borderRadius: '50%',
});

export default class Verify extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: null,
        }

        this.checkForAuth = this.checkForAuth.bind(this);
    }
    
    checkForAuth() {
        fetch(`https://dbe559e8.ngrok.io/api/verify/${window.location.hash.slice(1)}`)
            .then(d => d.json())
            .then(data => {
                console.log(data);
                if (!data.success) {
                    setTimeout(() => this.checkForAuth(), 200);
                } else {
                    this.setState({
                        user: data.payload,
                    })
                }
            })
    
    }

    componentDidMount() {
        this.checkForAuth()
    }

    render() {
        return (
            <Main>
                <HeroSlice>
                    <Container>
                        <LogoImg src="/static/logo.png" />
                        {this.state.user === null ? 
                        <div>
                            <h1>CHECK'in YO FACE</h1>
                            <img src="https://www.simspk.com/wp-content/uploads/2015/02/How-to-verify-SIM.png" />
                        </div> : <div>
                            <h1>Hi {this.state.user.user.name}</h1>
                            <h2>You have zero of every currency.</h2>
                            <RobChat />
                        </div>}
                    </Container>
                </HeroSlice>
            </Main>
        );
    }
}
