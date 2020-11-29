import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  background-color: var(--primary-dark);
  border: none;
  fill: var(--white);
  font-size: 0.8em;
  padding: 10px;
  height: 100%;
  width: 36px;
`
const ButtonSecondary = (props) => <ButtonStyled {...props} />

ButtonSecondary.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
}

export default ButtonSecondary
