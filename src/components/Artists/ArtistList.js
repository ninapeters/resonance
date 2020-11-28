import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AudioButton from '../Buttons/AudioButton'
import PrimaryButton from '../Buttons/PrimaryButton'

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string.isRequired,
  saveSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array,
}

export default function ArtistList({
  artists,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
  saveSong,
  savedSongs,
}) {
  return (
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
            <PrimaryButton
              id={id}
              handleClick={() => saveSong(id)}
              disabled={savedSongs?.some((song) => song.id === id)}
            >
              Save this song
            </PrimaryButton>
          </ButtonWrapper>
        </ListItemStyled>
      ))}
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItemStyled = styled.li`
  background-color: var(--primary-light);
  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: 1fr 1fr 2fr;
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
  grid-column-start: 2;
  grid-row: 1/3;
  justify-self: end;
`
const ButtonWrapper = styled.div`
  align-self: end;
  grid-column: 1/3;
`
