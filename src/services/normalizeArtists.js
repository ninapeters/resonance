export default function normalizeArtists(artists) {
  return artists.map((item) => {
    return {
      artist: item.artists[0].name,
      songTitle: item.name,
      songSnippet: item.preview_url,
      id: item.id,
    }
  })
}
