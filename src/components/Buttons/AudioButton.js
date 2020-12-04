import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { PlayIcon, PauseIcon } from '../Icons'

AudioButton.propTypes = {
  onClick: PropTypes.func,
  isSongPlaying: PropTypes.bool.isRequired,
}

export default function AudioButton({ onClick, isSongPlaying }) {
  return (
    <Button onClick={onClick} data-testid="audio-button">
      {isSongPlaying ? <PauseIcon title="pause" /> : <PlayIcon title="play" />}
    </Button>
  )
}

const Button = styled.button`
  background: var(--white-transparent);
  border: none;
  border-radius: 50%;
  box-shadow: var(--shadow-light);
  fill: var(--primary-light);
  height: 60px;
  padding: 14px;
  width: 60px;
`
