import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import SavedSong from './SavedSong'

SavedSongList.propTypes = {
  deleteSavedSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
}

export default function SavedSongList({
  deleteSavedSong,
  savedSongs,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
}) {
  return (
    <ListStyled>
      {savedSongs?.map(({ artist, songTitle, id }) => (
        <SavedSong
          key={id}
          artist={artist}
          songTitle={songTitle}
          id={id}
          deleteSavedSong={deleteSavedSong}
          toggleCurrentSongId={toggleCurrentSongId}
          isSongPlaying={isSongPlaying}
          currentSongId={currentSongId}
        />
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
