import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { clickAnimation } from '../../services/animationVariants'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isRedIcon: PropTypes.bool,
  isNoCircle: PropTypes.bool,
  isSmall: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

export default function Button({
  onClick,
  disabled,
  isRedIcon,
  isNoCircle,
  isSmall,
  testId,
  children,
}) {
  return (
    <ButtonStyled
      variants={clickAnimation}
      initial="rest"
      whileTap="pressed"
      onClick={onClick}
      disabled={disabled}
      isRedIcon={isRedIcon}
      isNoCircle={isNoCircle}
      isSmall={isSmall}
      data-testid={`${testId}-button`}
    >
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled(motion.button)`
  background: ${(props) =>
    props.isNoCircle ? 'transparent' : 'var(--white-transparent-min)'};
  border: none;
  border-radius: ${(props) =>
    props.isNoCircle ? '34px 10px 10px 34px' : '50%'};
  box-shadow: ${(props) => (props.isNoCircle ? 'none' : 'var(--shadow-light)')};
  fill: ${(props) =>
    props.isRedIcon ? 'var(--cta-red)' : 'var(--spotify-green)'};
  height: ${(props) => (props.isSmall ? '50px' : '60px')};
  padding: 16px;
  width: ${(props) => (props.isSmall ? '50px' : '60px')};
  &:disabled {
    background: var(--spotify-green-transparent);
    fill: var(--white);
  }
  &:focus {
    outline: 0;
  }
`
