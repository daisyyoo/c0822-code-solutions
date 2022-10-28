import React from 'react';
import ReactDOM from 'react-dom/client';

class Carousel extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="left-arrow">

          </div>
          <div className="image-container">
            <div className="">

            </div>
          </div>
          <div className="right-arrow">

          </div>
        </div>
      </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel />);
