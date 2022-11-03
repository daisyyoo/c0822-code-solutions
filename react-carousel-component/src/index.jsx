import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

// class Carousel extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="left-arrow col-3">
//             <i className="fa-sharp fa-solid fa-circle-arrow-left"></i>
//           </div>
//           <div className="image-container col-3">
//             <div className="images">
//               <img className="show" src="../images/001.png"></img>
//               <img className="hide" src="../images/004.png"></img>
//               <img className="hide" src="../images/007.png"></img>
//               <img className="hide" src="../images/025.png"></img>
//               <img className="hide" src="../images/039.png"></img>
//             </div>
//             <div className="bottom-nav">
//               <i className="fa-solid fa-circle"></i>
//               <i className="fa-regular fa-circle"></i>
//               <i className="fa-regular fa-circle"></i>
//               <i className="fa-regular fa-circle"></i>
//               <i className="fa-regular fa-circle"></i>
//             </div>
//           </div>
//           <div className="right-arrow col-3">
//             <i className="fa-sharp fa-solid fa-circle-arrow-right"></i>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const picArray = [
  {
    id: 1,
    name: 'Bulbasaur',
    url: '../images/001.png'
  },
  {
    id: 1,
    name: 'Charmander',
    url: '../images/004.png'
  },
  {
    id: 1,
    name: 'Squirtle',
    url: '../images/007.png'
  },
  {
    id: 1,
    name: 'Pikachu',
    url: '../images/025.png'
  },
  {
    id: 1,
    name: 'Jigglypuff',
    url: '../images/039.png'
  }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel array={picArray} />);