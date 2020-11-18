import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default ArtistList

ArtistList.propTypes = {
  artists: PropTypes.array,
}

function ArtistList({ artists }) {
  return (
    <div>
      <ListStyled>
        {artists?.map(({ artist, songTitle, id }) => (
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

  background-color: var(--primary);
  color: var(--font);
  font-size: 1em;
  font-weight: 600;
  padding: 20px;
`
