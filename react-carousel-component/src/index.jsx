import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const picArray = [
  {
    id: 0,
    name: 'Bulbasaur',
    url: '../images/001.png'
  },
  {
    id: 1,
    name: 'Charmander',
    url: '../images/004.png'
  },
  {
    id: 2,
    name: 'Squirtle',
    url: '../images/007.png'
  },
  {
    id: 3,
    name: 'Pikachu',
    url: '../images/025.png'
  },
  {
    id: 4,
    name: 'Jigglypuff',
    url: '../images/039.png'
  }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel picArray={picArray} />);
