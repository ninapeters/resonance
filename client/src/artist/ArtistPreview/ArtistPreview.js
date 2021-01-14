import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import AudioButton from '../../app/AudioButton'
import Button from '../../app/Button'
import { SaveIcon, SkipIcon } from '../../app/Icons/Icons'

ArtistPreview.propTypes = {
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  songUrl: PropTypes.string,
  updateTrack: PropTypes.func.isRequired,
  stopPlayingSong: PropTypes.func,
  togglePlayingSong: PropTypes.func,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
  saveSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array,
}

export default function ArtistPreview({
  artist,
  songTitle,
  id,
  image,
  songUrl,
  updateTrack,
  stopPlayingSong,
  togglePlayingSong,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
  saveSong,
  savedSongs,
}) {
  useEffect(() => {
    if (songUrl === null) {
      updateTrack()
    }
    toggleCurrentSongId(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songUrl])

  if (songUrl === null) return <></>

  return (
    <>
      <Preview key={id}>
        <Cover src={image} alt="" />
        <Content>
          <ArtistName>{artist}</ArtistName>
          <Song>{songTitle}</Song>
        </Content>
        <ButtonWrapper>
          <Button isRedIcon id={id} onClick={skipSong} testId="skip">
            <SkipIcon />
          </Button>
          <AudioButton
            onClick={togglePlayingSong}
            isSongPlaying={isSongPlaying && currentSongId === id}
            currentSongId={currentSongId}
          />
          <Button
            id={id}
            onClick={() => saveSong(id)}
            disabled={savedSongs?.some((song) => song.id === id)}
            testId="save"
          >
            <SaveIcon />
          </Button>
        </ButtonWrapper>
      </Preview>
    </>
  )

  function skipSong() {
    stopPlayingSong()
    updateTrack()
  }
}

const Preview = styled.li`
  display: grid;
  flex: 1 0 100%;
  grid-template-columns: 100%;
  grid-template-rows: 54vh auto;
  height: 100vh;
  position: relative;
  row-gap: 46px;
  scroll-snap-align: start;
`
const Cover = styled.img`
  border-radius: 0 0 70px 70px;
  box-shadow: var(--shadow-dark);
  height: 54vh;
  object-fit: cover;
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
const Song = styled.span`
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
