import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as PlayIcon } from '../../assets/play.svg'
import { ReactComponent as PauseIcon } from '../../assets/pause.svg'

AudioButton.propTypes = {
  handleClick: PropTypes.func,
  isSongPlaying: PropTypes.bool.isRequired,
}

export default function AudioButton({ handleClick, isSongPlaying }) {
  return (
    <Button onClick={handleClick}>
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
