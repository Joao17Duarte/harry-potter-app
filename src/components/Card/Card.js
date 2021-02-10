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

  el.style.backgroundColor = identifyHouseColor(house)

  function identifyHouseColor(house) {
    if (house === 'Gryffindor') return 'var(--color-gryffindor)'
    if (house === 'Slytherin') return 'var(--color-slytherin)'
    if (house === 'Hufflepuff') return 'var(--color-hufflepuff)'
    if (house === 'Ravenclaw') return 'var(--color-ravenclaw)'
    if (house === '') return 'var(--color-staff)'
  }

  return el
}
