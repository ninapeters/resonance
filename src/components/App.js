import styled from 'styled-components'
import data from '../data/spotifyTrackData.json'
import normalizeArtists from '../services/normalizeArtists'
import { useState, useEffect } from 'react'
import useAudio from './hooks/useAudio'
import useArtist from './hooks/useArtist'
import ArtistPage from './Pages/ArtistPage/ArtistPage'
import SavedSongPage from './Pages/SavedSongPage/SavedSongPage'
import Navigation from './Navigation/Navigation'

export default App

function App() {
  const [artistData, setArtistData] = useState([])
  useEffect(() => {
    setArtistData(normalizeArtists(data.tracks.items))
  }, [])
  const { toggleCurrentSongId, isSongPlaying, currentSongId } = useAudio({
    artistData,
  })
  const { savedSongs, saveSong } = useArtist({ artistData })
  const [showSavedSongPage, setShowSavedSongPage] = useState(false)

  return (
    <AppWrapper>
      <UnmuteMessage>Don't forget to unmute your device.</UnmuteMessage>
      <Main>
        {showSavedSongPage === false ? (
          <ArtistPage
            artists={artistData}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
            saveSong={saveSong}
            savedSongs={savedSongs}
          />
        ) : (
          ''
        )}
        {showSavedSongPage ? (
          <SavedSongPage
            savedSongs={savedSongs}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
          />
        ) : (
          ''
        )}
      </Main>
      <Footer>
        <Navigation
          handleClick={() => setShowSavedSongPage(!showSavedSongPage)}
        >
          {showSavedSongPage ? 'all songs' : 'saved songs'}
        </Navigation>
      </Footer>
    </AppWrapper>
  )
}
const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 6% auto 8%;
  height: 100vh;
`
const Main = styled.main`
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Footer = styled.footer`
  place-self: center;
`
const UnmuteMessage = styled.p`
  padding: 4px;
  color: var(--primary-dark-transparent);
  text-align: center;
  font-size: 0.7em;
`
