import React from 'react'
import ReactDOM from 'react-dom'
import Square from '..'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it('Square renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Square />, div)
})

it('Square renders correctly', () => {
  const { getByTestId } = render(<Square value='X' />)
  expect(getByTestId('square')).toHaveClass('square')
})

it('Square matches snapshot', () => {
  const tree = renderer.create(<Square />).toJSON()
  expect(tree).toMatchSnapshot()
})
