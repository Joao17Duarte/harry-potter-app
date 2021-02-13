import './AppHeader.css'

export default function AppHeader(title) {
  const el = document.createElement('header')
  el.className = 'AppHeader'
  el.innerHTML = `
  <h1>${title}
  <img  width="25" height="25" src="../assets/quidditch.svg" alt="">
  </h1>
  `
  return el
}
