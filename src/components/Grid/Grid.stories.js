import createElement from '../../lib/createElement'
import Grid from './Grid'

export default {
  title: 'Grid',
  component: Grid,
}

const exampleChildren = [
  createElement('span', { style: 'background: tomato' }, 'top'),
  createElement('span', { style: 'background: lightblue' }, 'center'),
  createElement('span', { style: 'background: tomato' }, 'bottom'),
]

export const defaultGrid = () => Grid(...exampleChildren)
