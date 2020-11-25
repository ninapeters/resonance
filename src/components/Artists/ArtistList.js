import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import useAudio from '../Audio/useAudio'
import AudioButton from '../Audio/AudioButton'
import Button from '../Button'

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
}

export default function ArtistList({ artists }) {
  const { toggleCurrentSongId, isSongPlaying, currentSongId } = useAudio({
    artists,
  })

  const [savedSongs, setSavedSongs] = useState([])

  return (
    <>
      <ListStyled>
        {artists?.map(({ artist, songTitle, id }) => (
          <ListItemStyled key={id}>
            <Artist>{artist}</Artist>
            <Song>{songTitle}</Song>
            <AudioButtonWrapper>
              <AudioButton
                handleClick={() => toggleCurrentSongId(id)}
                isSongPlaying={isSongPlaying && currentSongId === id}
                currentSongId={currentSongId}
              />
            </AudioButtonWrapper>
            <ButtonWrapper>
              <Button
                id={id}
                onClick={() => saveSong(id)}
                disabled={savedSongs.some((song) => song.id === id)}
              >
                Save this song
              </Button>
            </ButtonWrapper>
          </ListItemStyled>
        ))}
      </ListStyled>
      <ListStyled>
        {savedSongs.length > 0 && <h3>Saved songs:</h3>}
        {savedSongs.map(({ artist, songTitle, id }) => (
          <SavedSongsListItem key={id}>
            <Artist>{artist}</Artist>
            <Song>{songTitle}</Song>
            <AudioButtonWrapper>
              <AudioButton
                handleClick={() => toggleCurrentSongId(id)}
                isSongPlaying={isSongPlaying && currentSongId === id}
                currentSongId={currentSongId}
              />
            </AudioButtonWrapper>
          </SavedSongsListItem>
        ))}
      </ListStyled>
    </>
  )

  function saveSong(id) {
    setSavedSongs([artists.find((artist) => artist.id === id), ...savedSongs])
  }
}

const ListStyled = styled.ul`
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItemStyled = styled.li`
  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: 1fr 1fr 2fr;
  background-color: var(--primary-light);
  padding: 20px;
`
const Artist = styled.span`
  display: block;
  font-size: 75%;
  font-weight: 300;
  padding-bottom: 6px;
  text-transform: uppercase;
`
const Song = styled.span`
  color: var(--primary-dark);
  font-size: 1em;
  font-weight: 600;
  grid-column-start: 1;
`
const AudioButtonWrapper = styled.div`
  grid-row: 1/3;
  grid-column-start: 2;
  justify-self: end;
`
const ButtonWrapper = styled.div`
  grid-column: 1/3;
  align-self: end;
`
const SavedSongsListItem = styled.li`
  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: 1fr 1fr;
  background-color: var(--primary-light);
  padding: 20px;
`
