import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Artist from './Artist'

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
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
      {artists?.map(({ artist, songTitle, image, id }) => (
        <Artist
          key={id}
          artist={artist}
          songTitle={songTitle}
          image={image}
          id={id}
          toggleCurrentSongId={toggleCurrentSongId}
          isSongPlaying={isSongPlaying}
          currentSongId={currentSongId}
          saveSong={saveSong}
          savedSongs={savedSongs}
        />
      ))}
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  overflow-x: scroll;
  padding: 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
