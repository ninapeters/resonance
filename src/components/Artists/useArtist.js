import { useState } from 'react'

export default function useArtist({ artistData }) {
  const [savedSongs, setSavedSongs] = useState([])

  return { savedSongs, saveSong }

  function saveSong(id) {
    setSavedSongs([
      artistData.find((artist) => artist.id === id),
      ...savedSongs,
    ])
  }
}
