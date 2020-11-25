import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Navigation.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function Navigation({ handleClick, children }) {
  return <NavButton onClick={handleClick}>{children}</NavButton>
}

const NavButton = styled.button`
  background-color: transparent;
  border: var(--primary-dark) 2px solid;
  color: var(--primary-dark);
  padding: 6px;
  font-size: 0.8em;
`
