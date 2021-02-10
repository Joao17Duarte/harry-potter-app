import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(imagePath, name, house) {
  const characterImage = createElement('img', { src: imagePath })
  const characterName = createElement('h2', { innerText: name })
  const characterHouse = createElement('p', { innerText: house })

  const el = createElement(
    'section',
    { className: 'Card' },
    characterName,
    characterHouse,
    characterImage
  )
  return el
}

// const houseColors = function identifyHouseColor() {
//   if (house === 'Gryffindor') {
//     return (Card.style.background = '#c50000')
//   } else if (house === 'Slytherin') {
//     return (Card.style.background = '#2a623d')
//   } else if (house === 'Hufflepuff') {
//     return (Card.style.background = '#ffdb00')
//   } else {
//     return (Card.style.background = '#1d72b4')
//   }
// }
