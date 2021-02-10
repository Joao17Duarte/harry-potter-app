import createElement from '../../lib/createElement'
import homeSvg from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import './Navigation.css'

const buttonsConfig = [{ text: 'Home', svgPath: homeSvg }]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })
  return createElement('nav', { className: 'Navigation' }, ...buttons)
}
