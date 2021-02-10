import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import Card from './components/Card'
import createElement from './lib/createElement'

export default function App() {
  const header = AppHeader('Harry Potter App')
  document.body.append(header)

  // Fetch API
  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => errorHandler(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character.name))
    document.body.append(...cards)
  }

  function errorHandler(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: red;' },
      error.message
    )
    document.body.append(errorMessage)
  }
}
