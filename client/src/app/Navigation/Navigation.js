import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { HomeIcon, SaveIcon } from '../Icons/Icons'

export default function Navigation({ onClick }) {
  return (
    <NavWrapper>
      <NavBar>
        <NavigationLink exact to="/" onClick={onClick} data-testid="link-home">
          <HomeIcon />
        </NavigationLink>
        <NavigationLink
          to="/favorites"
          onClick={onClick}
          data-testid="link-favorites"
        >
          <SaveIcon />
        </NavigationLink>
      </NavBar>
    </NavWrapper>
  )
}

const NavWrapper = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
`
const NavBar = styled.nav`
  background: var(--gradient-light);
  border-radius: 28px;
  box-shadow: var(--shadow-dark);
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  padding: 10px 50px 8px;
`
const NavigationLink = styled(NavLink)`
  fill: var(--white-transparent-max);
  width: 28px;
  &.active {
    fill: var(--white);
  }
  &:focus {
    outline: none;
  }
`
