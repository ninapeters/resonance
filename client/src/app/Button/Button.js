import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isRedIcon: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

export default function Button({
  children,
  isRedIcon,
  disabled,
  onClick,
  isNoCircle,
  isSmall,
}) {
  const clickAnimation = {
    rest: { scale: 1 },
    pressed: { scale: 0.9 },
  }

  return (
    <motion.div variants={clickAnimation} initial="rest" whileTap="pressed">
      <ButtonStyled
        onClick={onClick}
        disabled={disabled}
        isRedIcon={isRedIcon}
        isNoCircle={isNoCircle}
        isSmall={isSmall}
      >
        {children}
      </ButtonStyled>
    </motion.div>
  )
}

const ButtonStyled = styled.button`
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
