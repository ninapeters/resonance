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
  background-color: transparent;
  border: var(--primary-dark) 2px solid;
  fill: var(--primary-dark);
  height: 46px;
  padding: 10px;
  width: 46px;
`
