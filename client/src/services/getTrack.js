export default function getTrack() {
  return fetch('/api/track')
    .then((res) => res.json())
    .then((data) => console.log(data))
}
