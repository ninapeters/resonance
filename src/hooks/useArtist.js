import { useState, useEffect } from 'react'
import { loadFromLocal, saveToLocal } from '../lib/localStorage'

export default function useArtist({ artistData }) {
  const [savedSongsList, setSavedSongsList] = useState(
    loadFromLocal('SavedSongsList') ?? []
  )

  useEffect(() => {
    saveToLocal('SavedSongsList', savedSongsList)
  }, [savedSongsList])

  return { savedSongsList, saveSong }

  function saveSong(id) {
    setSavedSongsList([
      artistData.find((artist) => artist.id === id),
      ...savedSongsList,
    ])
  }
}
