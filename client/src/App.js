import styled from 'styled-components/macro'
import data from './data/spotifyTrackData.json'
import getProfile from './services/getProfile'
import normalizeArtists from './services/normalizeArtists'
import { useState, useEffect } from 'react'
import useAudio from './hooks/useAudio'
import useArtist from './hooks/useArtist'
import ArtistList from './components/Artists/ArtistList'
import SavedSongList from './components/SavedSongs/SavedSongList'
import Navigation from './components/Navigation/Navigation'

export default App

function App() {
  useEffect(() => {
    getProfile().then((data) => console.log(data))
  }, [])

  const [artistData, setArtistData] = useState([])

  useEffect(() => {
    setArtistData(normalizeArtists(data.tracks.items))
  }, [])

  const {
    toggleCurrentSongId,
    isSongPlaying,
    currentSongId,
    stopPlayingSong,
  } = useAudio({
    artistData,
  })

  const { savedSongs, saveSong, deleteSavedSong } = useArtist({ artistData })
  const [showSavedSongList, setShowSavedSongList] = useState(false)

  return (
    <AppWrapper>
      <UnmuteMessage>Don't forget to unmute your device.</UnmuteMessage>
      <Main>
        {showSavedSongList === false ? (
          <ArtistList
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
        {showSavedSongList ? (
          <SavedSongList
            stopPlayingSong={stopPlayingSong}
            deleteSavedSong={deleteSavedSong}
            savedSongs={savedSongs}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
          />
        ) : (
          ''
        )}
      </Main>
      <Footer className="footer-fixed">
        <Navigation onClick={() => setShowSavedSongList(!showSavedSongList)}>
          {showSavedSongList ? 'all songs' : 'saved songs'}
        </Navigation>
      </Footer>
    </AppWrapper>
  )
}
const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 6% auto 8%;
  height: 100vh;

  &.footer-fixed {
    bottom: 0;
    left: 0;
    position: fixed;
  }
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
  color: var(--primary-dark-transparent);
  font-size: 0.7em;
  padding: 4px;
  text-align: center;
`
