import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowIcon } from '../Icons/Icons'

UnmuteMessage.propTypes = {
  children: PropTypes.string,
}

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
}

export default function UnmuteMessage() {
  const [isShown, setIsShown] = useState(true)

  return (
    <MessageWrapper animate={isShown ? 'open' : 'closed'} variants={variants}>
      <p onClick={() => setIsShown(false)}>Please unmute your device.</p>
      <Arrow />
    </MessageWrapper>
  )
}

const MessageWrapper = styled(motion.section)`
  background: var(--white-transparent-min);
  border-radius: 20px;
  box-shadow: var(--shadow-light);
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 20px auto;
  width: 80%;
  p {
    color: var(--primary-regular);
    font-size: 0.7em;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }
`
const Arrow = styled(ArrowIcon)`
  width: 10px;
  margin-left: 10px;
  fill: var(--primary-regular);
`
