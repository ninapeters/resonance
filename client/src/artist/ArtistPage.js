import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ArtistPreview from './ArtistPreview'
import Navigation from '../app/Navigation'

ArtistPage.propTypes = {
  artists: PropTypes.array,
  updateTrack: PropTypes.func,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
  saveSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array,
}

export default function ArtistPage({
  artists,
  updateTrack,
  stopPlayingSong,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
  saveSong,
  savedSongs,
}) {
  return (
    <>
      <ListStyled>
        {artists?.map(({ artist, songTitle, image, songUrl, id }) => (
          <ArtistPreview
            key={id}
            artist={artist}
            songTitle={songTitle}
            image={image}
            songUrl={songUrl}
            id={id}
            updateTrack={updateTrack}
            stopPlayingSong={stopPlayingSong}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
            saveSong={saveSong}
            savedSongs={savedSongs}
          />
        ))}
      </ListStyled>
      <Footer>
        <Navigation onClick={stopPlayingSong} />
      </Footer>
    </>
  )
}

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  margin: 0;
  overflow-x: scroll;
  padding: 0;
  scroll-snap-type: x mandatory;
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
