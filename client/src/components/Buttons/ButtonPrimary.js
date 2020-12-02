import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  background-color: transparent;
  border: var(--primary-dark) 2px solid;
  color: var(--primary-dark);
  font-size: 0.8em;
  padding: 6px;
  width: 100%;

  &:disabled {
    opacity: 50%;
  }
`
const ButtonPrimary = (props) => <ButtonStyled {...props} />

ButtonPrimary.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default ButtonPrimary
