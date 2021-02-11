import './HouseFilter.css'
import Button from '../Button'
import createElement from '../../lib/createElement'

export default function HouseFilter(onFilterByHouse) {
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

  const buttons = houses.map(house => {
    const button = Button(house, () => {
      onFilterByHouse(house)
    })
    return button
  })
  return createElement('section', { className: 'HouseFilter' }, ...buttons)
}
