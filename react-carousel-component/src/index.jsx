import React from 'react';
import ReactDOM from 'react-dom/client';

class Carousel extends React.Component {
  render() {
    return (
      <img></img>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel />);
