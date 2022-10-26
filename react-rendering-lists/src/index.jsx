import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokedexNames(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokedex =>
    <li key={pokedex.number}>{pokedex.name}</li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<PokedexNames pokedex={pokedex}/>);

// const element = (
//   <ul>
//     {
//       pokedex.map(pokemon => {
//         return <li key={pokemon.number}>{pokemon.name}</li>;
//       })
//     }
//   </ul>
// );

// root.render(element);
