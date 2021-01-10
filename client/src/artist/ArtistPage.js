import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import ArtistPreview from './ArtistPreview'
import UnmuteMessage from '../app/UnmuteMessage'

ArtistPage.propTypes = {
  artists: PropTypes.array,
  updateTrack: PropTypes.func,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
  saveSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array,
}

const mainVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      duration: '0.15',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      duration: '0.15',
    },
  },
}

export default function ArtistPage({
  artists,
  updateTrack,
  stopPlayingSong,
  togglePlayingSong,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
  saveSong,
  savedSongs,
}) {
  return (
    <motion.main
      variants={mainVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <MessagePosition>
        <UnmuteMessage />
      </MessagePosition>
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
            togglePlayingSong={togglePlayingSong}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
            saveSong={saveSong}
            savedSongs={savedSongs}
          />
        ))}
      </ListStyled>
    </motion.main>
  )
}

const MessagePosition = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 10;
`
const ListStyled = styled.ul`
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
