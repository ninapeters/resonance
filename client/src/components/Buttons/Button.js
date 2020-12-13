import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  background: var(--white-transparent-min);
  border: none;
  border-radius: 50%;
  box-shadow: var(--shadow-light);
  fill: ${(props) =>
    props.isDeleteButton
      ? 'var(--cta-red)'
      : 'var(--spotify-green-transparent)'};
  height: 60px;
  padding: 14px;
  width: 60px;
  &:disabled {
    fill: var(--spotify-green);
  }
  &:focus {
    outline: 0;
  }
`
const Button = (props) => <ButtonStyled {...props} />

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDeleteButton: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

export default Button
