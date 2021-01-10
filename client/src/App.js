import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components/macro'
import normalizeArtists from './services/normalizeArtists'
import { useState, useEffect } from 'react'
import useSpotify from './hooks/useSpotify'
import useAudio from './hooks/useAudio'
import useArtist from './hooks/useArtist'
import LoginPage from './login/LoginPage'
import ArtistPage from './artist/ArtistPage'
import SavedSongPage from './saved/SavedSongPage'
import Navigation from './app/Navigation'

export default function App() {
  const { track, token, updateTrack } = useSpotify()

  const [artistData, setArtistData] = useState([])

  useEffect(() => {
    setArtistData(normalizeArtists(track?.tracks.items))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track])

  const { savedSongs, saveSong, deleteSavedSong } = useArtist({
    artistData,
  })

  const {
    toggleCurrentSongId,
    isSongPlaying,
    currentSongId,
    stopPlayingSongById,
    stopPlayingSong,
    togglePlayingSong,
  } = useAudio({
    artistData,
    savedSongs,
    updateTrack,
  })

  const location = useLocation()

  return (
    <Main>
      {!token ? (
        <LoginPage />
      ) : (
        <>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <ArtistPage
                  artists={artistData}
                  updateTrack={updateTrack}
                  stopPlayingSong={stopPlayingSong}
                  togglePlayingSong={togglePlayingSong}
                  toggleCurrentSongId={toggleCurrentSongId}
                  isSongPlaying={isSongPlaying}
                  currentSongId={currentSongId}
                  saveSong={saveSong}
                  savedSongs={savedSongs}
                />
              </Route>
              <Route path="/favorites">
                <SavedSongPage
                  stopPlayingSongById={stopPlayingSongById}
                  deleteSavedSong={deleteSavedSong}
                  savedSongs={savedSongs}
                  toggleCurrentSongId={toggleCurrentSongId}
                  isSongPlaying={isSongPlaying}
                  currentSongId={currentSongId}
                  stopPlayingSong={stopPlayingSong}
                />
              </Route>
            </Switch>
          </AnimatePresence>
          <Footer>
            <Navigation onClick={stopPlayingSong} />
          </Footer>
        </>
      )}
    </Main>
  )
}

const Main = styled.main`
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Footer = styled.footer`
  bottom: 30px;
  left: 0;
  position: fixed;
  right: 0;
`
