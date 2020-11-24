import { useEffect, useState, useRef } from 'react'
import { Howl } from 'howler'

export default function useAudio({ artists }) {
  const [currentSongId, setCurrentSongId] = useState()
  const [isSongPlaying, setIsSongPlaying] = useState(false)
  const songRef = useRef(null)

  const songUrl = artists.find((artist) => artist.id === currentSongId)?.songUrl

  useEffect(() => {
    songRef.current?.stop()
    songRef.current = new Howl({
      src: [songUrl],
      format: ['mp3'],
      preload: true,
      autoplay: true,
      volume: 0.2,
      onend: function () {
        setIsSongPlaying(false)
      },
    })
    setIsSongPlaying(true)
  }, [songUrl])

  useEffect(() => {
    if (isSongPlaying) {
      songRef.current.play()
      songRef.current.fade(0, 0.2, 500)
    } else {
      songRef.current.pause()
    }
  }, [isSongPlaying])

  function toggleCurrentSongId(id) {
    if (id === currentSongId) {
      setIsSongPlaying(!isSongPlaying)
    } else {
      setCurrentSongId(id)
    }
  }

  return {
    toggleCurrentSongId,
    isSongPlaying,
    currentSongId,
  }
}
