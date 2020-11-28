import { useState, useEffect } from 'react'
import { loadFromLocal, saveToLocal } from '../lib/localStorage'

export default function useArtist({ artistData }) {
  const [savedSongs, setSavedSongs] = useState(
    loadFromLocal('savedSongs') ?? []
  )

  useEffect(() => {
    saveToLocal('savedSongs', savedSongs)
  }, [savedSongs])

  return { savedSongs, saveSong }

  function saveSong(id) {
    setSavedSongs([
      artistData.find((artist) => artist.id === id),
      ...savedSongs,
    ])
  }
}
