import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { ReactComponent as PlayIcon } from '../../assets/play.svg'
import { ReactComponent as PauseIcon } from '../../assets/pause.svg'

AudioButton.propTypes = {
  songUrl: PropTypes.string.isRequired,
}

export default function AudioButton({ songUrl }) {
  const song = new Howl({
    src: [`${songUrl}`],
    format: ['mp3'],
    preload: true,
    autoplay: false,
    volume: 0.2,
  })

  const [isSongPlaying, setIsSongPlaying] = useState(false)
  let songRef = useRef(null)

  useEffect(() => {
    songRef.current = song
  }, [])

  useEffect(() => {
    if (isSongPlaying) {
      songRef.current.play()
      songRef.current.fade(0, 0.2, 500)
    } else {
      songRef.current.pause()
    }
  }, [isSongPlaying])

  return (
    <Button onClick={handleAudio}>
      {isSongPlaying ? <PauseIcon /> : <PlayIcon />}
    </Button>
  )

  function handleAudio() {
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
