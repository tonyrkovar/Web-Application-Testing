import React from 'react';
import { render } from '@testing-library/react'
import App from './App';
import Dashboard from './components/Dashboard'
import { tsExternalModuleReference } from '@babel/types';

it('renders without crashing', () => {
  render(<App />);
});

// it('Is this thing on?', () => {
//   render(<Dashboard />);
// })

const sel = id => `[data-testid='${id}']`
const rootNode = id => document.querySelector(sel(`${id}`))
const strikesButton = rootNode('strikes')
const ballsButton = rootNode('balls')
const foulsButton = rootNode('fouls')
const hitButton = rootNode('hit')
const arr = [strikesButton, ballsButton, foulsButton, hitButton];

arr.forEach(x => {
  it(`renders ${x} right`, () => {
    render(x);
  })
})

