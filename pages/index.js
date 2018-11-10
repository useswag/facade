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

const Tag = styled('h2')({
    fontStyle: 'italic',
});

export default () => (
    <Main>
        <HeroSlice>
            <Container>
                <LogoImg src="/static/logo.png" />
                <h1>Welcome to Swag</h1>
                <Tag>Banking for the justifiably paranoid.</Tag>
            </Container>
        </HeroSlice>
    </Main>
);
