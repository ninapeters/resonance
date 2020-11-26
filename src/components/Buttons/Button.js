import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function Button({ disabled, handleClick, children }) {
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={handleClick}
      data-testid="button"
    >
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background-color: transparent;
  border: var(--primary-dark) 2px solid;
  color: var(--primary-dark);
  padding: 6px;
  font-size: 0.8em;
  width: 100%;

  &:disabled {
    opacity: 50%;
  }
`
