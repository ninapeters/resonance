import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as PlayIcon } from '../../assets/play.svg'
import { ReactComponent as PauseIcon } from '../../assets/pause.svg'
import useAudio from './useAudio'

AudioButton.propTypes = {
  songUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentSong: PropTypes.string.isRequired,
  setCurrentSong: PropTypes.func.isRequired,
}

export default function AudioButton({
  songUrl,
  id,
  currentSong,
  setCurrentSong,
}) {
  const { isSongPlaying, setIsSongPlaying } = useAudio({
    songUrl,
    id,
    currentSong,
  })

  return (
    <Button onClick={handleAudio}>
      {isSongPlaying ? <PauseIcon /> : <PlayIcon />}
    </Button>
  )

  function handleAudio() {
    setCurrentSong(id)
    setIsSongPlaying(!isSongPlaying)
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
