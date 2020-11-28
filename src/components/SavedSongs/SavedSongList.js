import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AudioButton from '../Buttons/AudioButton'

SavedSongList.propTypes = {
  savedSongs: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string.isRequired,
}

export default function SavedSongList({
  savedSongs,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
}) {
  return (
    <ListStyled>
      {savedSongs?.map(({ artist, songTitle, id }) => (
        <ListItem key={id}>
          <Artist>{artist}</Artist>
          <Song>{songTitle}</Song>
          <AudioButtonWrapper>
            <AudioButton
              handleClick={() => toggleCurrentSongId(id)}
              isSongPlaying={isSongPlaying && currentSongId === id}
              currentSongId={currentSongId}
            />
          </AudioButtonWrapper>
        </ListItem>
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
const ListItem = styled.li`
  background-color: var(--primary-light);
  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: 1fr 1fr;
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
