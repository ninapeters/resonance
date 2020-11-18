export default function getTrackData() {
  return fetch('http://localhost:4000/tracks').then((res) => res.json())
}
