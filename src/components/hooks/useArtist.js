import { useState } from 'react'

export default function useArtist({ artistData }) {
  const [SavedSongsList, setSavedSongsList] = useState([])

  return { SavedSongsList, saveSong }

  function saveSong(id) {
    setSavedSongsList([
      artistData.find((artist) => artist.id === id),
      ...SavedSongsList,
    ])
  }
}
