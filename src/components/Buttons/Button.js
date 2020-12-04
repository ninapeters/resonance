import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  background: var(--white-transparent);
  border: none;
  border-radius: ${(props) =>
    props.isDelteButton ? '34px 10px 10px 34px' : '50%'};
  box-shadow: var(--shadow-light);
  fill: ${(props) =>
    props.isDelteButton
      ? 'var(--cta-red)'
      : 'var(--spotify-green-transparent)'};
  height: 60px;
  padding: 14px;
  width: 60px;

  &:disabled {
    fill: var(--spotify-green);
  }
`
const Button = (props) => <ButtonStyled {...props} />

Button.propTypes = {
  onClick: PropTypes.func,
  isDelteButton: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

export default Button
