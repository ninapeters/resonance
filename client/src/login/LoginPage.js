import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import { clickAnimation } from '../services/animationVariants'
import { Logo, Spotify } from '../app/Logos/Logos'

export default function LoginPage() {
  const loginUrl = process.env.REACT_APP_ORIGIN

  return (
    <LoginWrapper>
      <LoginGrid>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Content>
          <LoginLink
            variants={clickAnimation}
            initial="rest"
            whileTap="pressed"
            href={`${loginUrl}/login`}
            data-testid="login-button"
          >
            Login with <SpotifyLogo />
          </LoginLink>
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
  place-self: center;
  width: 90%;
  max-width: 420px;
`
const Content = styled.div`
  justify-self: center;
  p {
    color: white;
    font-size: 0.9;
    font-weight: 300;
    text-align: center;
    margin-top: 24px;
  }
`
const LoginLink = styled(motion.a)`
  background: var(--white);
  border-radius: 28px;
  box-shadow: var(--shadow-dark);
  color: var(--spotify-green);
  font-weight: 700;
  padding: 6px 36px 8px;
  text-decoration: none;
`
const SpotifyLogo = styled(Spotify)`
  width: 22px;
  position: relative;
  top: 4.5px;
  margin-left: 2px;
`
