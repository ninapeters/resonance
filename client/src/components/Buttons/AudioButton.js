import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { PlayIcon, PauseIcon } from '../Icons'

AudioButton.propTypes = {
  onClick: PropTypes.func,
  isSongPlaying: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool,
}

export default function AudioButton({ onClick, isSongPlaying, isSmall }) {
  return (
    <Button onClick={onClick} data-testid="audio-button" isSmall={isSmall}>
      {isSongPlaying ? <PauseIcon title="pause" /> : <PlayIcon title="play" />}
    </Button>
  )
}

const Button = styled.button`
  background: ${(props) =>
    props.isSmall ? 'transparent' : 'var(--white-transparent-min)'};
  border: none;
  border-radius: 50%;
  box-shadow: ${(props) => (props.isSmall ? 'none' : 'var(--shadow-light)')};
  fill: var(--primary-regular);
  height: ${(props) => (props.isSmall ? '48px' : '60px')};
  padding: 14px;
  width: ${(props) => (props.isSmall ? '48px' : '60px')};
  &:focus {
    outline: 0;
  }
`
