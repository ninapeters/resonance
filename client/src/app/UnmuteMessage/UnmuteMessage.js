import styled from 'styled-components'
import PropTypes from 'prop-types'

UnmuteMessage.propTypes = {
  children: PropTypes.string,
}

export default function UnmuteMessage() {
  return (
    <MessageWrapper>
      <p>Please unmute your device.</p>
    </MessageWrapper>
  )
}

const MessageWrapper = styled.section`
  background: var(--white-transparent-min);
  padding: 8px;
  width: 100%;
  p {
    color: var(--primary-regular);
    font-size: 0.7em;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }
`
