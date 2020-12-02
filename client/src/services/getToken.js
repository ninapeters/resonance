import queryString from 'query-string'

export default function getToken() {
  const parsed = queryString.parse(window.location.search)
  const accessToken = parsed.access_token

  return fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
}
