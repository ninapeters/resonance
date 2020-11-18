//import styled from 'styled-components'
import data from '../data/artistList.json'

//import PropTypes from 'prop-types'
//ArtistList.propTypes = {}

export default function ArtistList() {
  const artists = data.artists.items

  return (
    <div>
      {artists.map(({ id, name }) => (
        <div>
          <span key={id}>{name}</span>
        </div>
      ))}
    </div>
  )
}
