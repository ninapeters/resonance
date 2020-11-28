import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

SecondaryButton.propTypes = {
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.object.isRequired,
}

export default function SecondaryButton({ handleClick, children }) {
  return (
    <ButtonStyled onClick={handleClick} data-testid="button">
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background-color: var(--primary-dark);
  border: none;
  fill: var(--white);
  font-size: 0.8em;
  padding: 10px;
  height: 100%;
  width: 36px;
`
