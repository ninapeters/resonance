import { useEffect, useState, useRef } from 'react'
import { Howl } from 'howler'

export default function useAudio({ artistData, savedSongs, updateTrack }) {
  const [currentSongId, setCurrentSongId] = useState()
  const [isSongPlaying, setIsSongPlaying] = useState(false)
  const songRef = useRef(null)

  const songUrl =
    artistData?.find((artist) => artist.id === currentSongId)?.songUrl ??
    savedSongs?.find((artist) => artist.id === currentSongId)?.songUrl

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function stopPlayingSongById(id) {
    if (id === currentSongId) {
      songRef.current.stop()
      setIsSongPlaying(false)
    }
  }

  function stopPlayingSong() {
    songRef.current.stop()
    setIsSongPlaying(false)
  }

  return {
    toggleCurrentSongId,
    isSongPlaying,
    currentSongId,
    stopPlayingSongById,
    stopPlayingSong,
  }
}
