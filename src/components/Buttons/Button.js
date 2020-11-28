import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  disabled: PropTypes.bool,
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
  font-size: 0.8em;
  padding: 6px;
  width: 100%;

  &:disabled {
    opacity: 50%;
  }
`
