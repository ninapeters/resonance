import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AudioButton from '../Buttons/AudioButton'
import Button from '../Buttons/Button'
import { SaveIcon, SkipIcon } from '../Icons'

Song.propTypes = {
  artists: PropTypes.array.isRequired,
  updateTrack: PropTypes.func.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
  saveSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array,
}

export default function Song({
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
    <SongWrapper>
      {artists?.map(({ artist, songTitle, image, id }) => (
        <SongGrid key={id}>
          <Cover src={image} alt="" />
          <Content>
            <ArtistName>{artist}</ArtistName>
            <SongTitle>{songTitle}</SongTitle>
          </Content>
          <ButtonWrapper>
            <Button
              isRedIcon
              id={id}
              onClick={skipSong}
              data-testid="skip-button"
            >
              <SkipIcon />
            </Button>
            <AudioButton
              onClick={() => toggleCurrentSongId(id)}
              isSongPlaying={isSongPlaying && currentSongId === id}
              currentSongId={currentSongId}
            />
            <Button
              id={id}
              onClick={() => saveSong(id)}
              disabled={savedSongs?.some((song) => song.id === id)}
              data-testid="save-button"
            >
              <SaveIcon />
            </Button>
          </ButtonWrapper>
        </SongGrid>
      ))}
    </SongWrapper>
  )

  function skipSong() {
    stopPlayingSong()
    updateTrack()
  }
}

const SongWrapper = styled.section`
  height: 100vh;
`
const SongGrid = styled.div`
  display: grid;
  flex: 1 0 100%;
  grid-template-columns: 100%;
  grid-template-rows: 54vh auto;
  position: relative;
  row-gap: 46px;
  scroll-snap-align: start;
`
const Cover = styled.img`
  border-radius: 0 0 70px 70px;
  box-shadow: var(--shadow-dark);
  height: 54vh;
  object-fit: cover;
  position: relative;
  width: 100%;
`
const Content = styled.section`
  padding: 0 22px;
`
const ArtistName = styled.span`
  color: var(--primary-regular);
  display: block;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
`
const SongTitle = styled.span`
  color: var(--primary-regular);
  font-size: 1.6em;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 36%;
  width: 100%;
`
