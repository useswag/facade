import { Main } from '../components/Main';
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

const BigDataImage = styled('img')({
    width: '100vw',
    height: '180vh',
});

const Tag = styled('h2')({
    fontStyle: 'italic',
});

const Button = styled('a')({
    display: 'block',
    padding: '1rem',
    background: 'white',
    color: COLORS.AccentBlue,
    textDecoration: 'none',
    fontSize: 30
});

const Actions = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
});

export default () => (
    <Main>
        <HeroSlice>
            <Container>
                <LogoImg src="/static/logo.png" />
                <h1>Welcome to Swag</h1>
                <Tag>Banking for the justifiably paranoid.</Tag>
                <Actions>
                    <Button href="https://dbe559e8.ngrok.io/login">Sign in</Button>
                    <Button href="https://m.me/useswagbank/">Log up</Button>
                </Actions>
            </Container>
        </HeroSlice>
        <BigDataImage src="/static/important.png" />
    </Main>
);
