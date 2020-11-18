import styled from 'styled-components/macro'
//import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import getTrackData from '../services/getTrackData'

export default ArtistList

/* ArtistList.propTypes = {
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
} */

function ArtistList() {
  const [trackData, setTrackData] = useState([])

  useEffect(() => {
    getTrackData().then((tracks) => setTrackData(tracks.items))
  }, [])

  const artistDataList = trackData.map((item) => {
    return {
      artist: item.artists[0].name,
      songTitle: item.name,
      id: item.id,
    }
  })

  return (
    <div>
      <ListStyled>
        {artistDataList.map(({ artist, songTitle, id }) => (
          <ListItemStyled key={id}>
            <span>{artist}</span>
            {songTitle}
          </ListItemStyled>
        ))}
      </ListStyled>
    </div>
  )
}
const ListStyled = styled.ul`
  display: grid;
  font-family: sans-serif;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItemStyled = styled.li`
  span {
    display: block;
    font-size: 75%;
    font-weight: 300;
    padding-bottom: 6px;
    text-transform: uppercase;
  }

  background-color: #e6eded;
  color: #2e3332;
  font-size: 1.2em;
  font-weight: 600;
  padding: 20px;
`
