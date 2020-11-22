import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as PlayIcon } from '../../assets/play.svg'
import { ReactComponent as PauseIcon } from '../../assets/pause.svg'
import useAudio from './useAudio'

AudioButton.propTypes = {
  songUrl: PropTypes.string,
  id: PropTypes.string,
  currentSong: PropTypes.string,
  setCurrentSong: PropTypes.func,
}

export default function AudioButton({
  songUrl,
  id,
  currentSong,
  setCurrentSong,
}) {
  const { isSongPlaying, toggleAudioState } = useAudio({
    songUrl,
    id,
    currentSong,
  })

  return (
    <Button onClick={handleAudio}>
      {isSongPlaying ? <PauseIcon title="pause" /> : <PlayIcon title="play" />}
    </Button>
  )

  function handleAudio() {
    setCurrentSong(id)
    toggleAudioState()
  }
}

const Button = styled.button`
  background-color: transparent;
  border: var(--primary-dark) 2px solid;
  fill: var(--primary-dark);
  height: 46px;
  padding: 10px;
  width: 46px;
`
