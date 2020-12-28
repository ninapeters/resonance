import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const HeaderStyled = styled.div`
  background: var(--gradient-light);
  border-radius: 0 0 70px 70px;
  box-shadow: var(--shadow-dark);
  color: var(--white);
  display: grid;
  font-size: 1.6em;
  font-weight: 300;
  height: 144px;
  letter-spacing: 0.05em;
  place-items: center;
  text-transform: uppercase;
  width: 100%;
`
const Header = (props) => <HeaderStyled {...props} />

Header.propTypes = {
  children: PropTypes.string,
}

export default Header
