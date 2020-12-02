export default function getProfile() {
  return fetch('/me').then((res) => res.json())
}
