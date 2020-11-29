import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Navigation.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function Navigation({ onClick, children }) {
  return <NavButton onClick={onClick}>{children}</NavButton>
}

const NavButton = styled.button`
  background-color: transparent;
  border: var(--primary-dark) 2px solid;
  color: var(--primary-dark);
  font-size: 0.8em;
  padding: 6px;
`
