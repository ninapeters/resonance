import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { HomeIcon, SaveIcon } from '../Icons'

export default function Navigation({ onClick }) {
  return (
    <Nav>
      <NavLinkStyled exact to="/" onClick={onClick}>
        <HomeIcon />
      </NavLinkStyled>
      <NavLinkStyled to="/favorites" onClick={onClick}>
        <SaveIcon />
      </NavLinkStyled>
    </Nav>
  )
}

const Nav = styled.nav`
  background: var(--gradient-light);
  border-radius: 28px;
  box-shadow: var(--shadow-light);
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  padding: 10px 50px 8px;
`
const NavLinkStyled = styled(NavLink)`
  fill: var(--white-transparent-max);
  width: 28px;
  &.active {
    fill: var(--white);
  }
  &:focus {
    outline: none;
  }
`
