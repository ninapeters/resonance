import styled from 'styled-components/macro'
import { ReactComponent as Spotify } from '../../assets/spotify.svg'
import { ReactComponent as Logo } from '../../assets/resonance.svg'

export default function Login() {
  return (
    <LoginWrapper>
      <LoginGrid>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Content>
          <a href="http://localhost:3001/login" data-testid="login-button">
            <LoginButton>
              <p>
                Login with <SpotifyLogo />
              </p>
            </LoginButton>
          </a>
          <p>
            and discover new songs <br></br> and artists.
          </p>
        </Content>
      </LoginGrid>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.section`
  background: var(--gradient-regular);
  height: 100vh;
`
const LoginGrid = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: 100vh;
  padding: 0 44px;
  place-content: center;
`
const LogoWrapper = styled.div`
  grid-row-start: 1;
  place-self: center;
  width: 90%;
  max-width: 420px;
`
const Content = styled.div`
  grid-row-start: 2;
  p {
    color: white;
    font-size: 0.9;
    font-weight: 300;
    text-align: center;
  }
  span {
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }
`
const LoginButton = styled.div`
  background: var(--white);
  border-radius: 28px;
  box-shadow: var(--shadow-dark);
  padding: 6px 0 12px;
  width: 100%;
  max-width: 420px;

  p {
    color: var(--spotify-green);
    font-weight: 700;
    margin: auto;
  }
`
const SpotifyLogo = styled(Spotify)`
  width: 22px;
  position: relative;
  top: 4.5px;
  margin-left: 2px;
`
