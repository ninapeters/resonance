import { useEffect, useState, useRef } from 'react'
import { Howl } from 'howler'

export default function useAudio({ songUrl, id, currentSong }) {
  const song = new Howl({
    src: [`${songUrl}`],
    format: ['mp3'],
    preload: true,
    autoplay: false,
    volume: 0.2,
    onend: function () {
      setIsSongPlaying(false)
    },
  })

  const [isSongPlaying, setIsSongPlaying] = useState(false)
  let songRef = useRef(null)

  useEffect(() => {
    songRef.current = song
  }, [])

  useEffect(() => {
    if (currentSong === id && isSongPlaying) {
      songRef.current.play()
      songRef.current.fade(0, 0.2, 500)
    } else {
      setIsSongPlaying(false)
      songRef.current.pause()
    }
  }, [currentSong, isSongPlaying])

  return { isSongPlaying, setIsSongPlaying }
}
