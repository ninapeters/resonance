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
  height: ${(props) => (props.hasImage ? '384px' : '144px')};
  letter-spacing: 0.05em;
  padding: 6px;
  place-items: center;
  text-transform: uppercase;
  width: 100%;
`
const Header = (props) => <HeaderStyled {...props} />

Header.propTypes = {
  children: PropTypes.array,
  hasImage: PropTypes.bool,
}

export default Header
