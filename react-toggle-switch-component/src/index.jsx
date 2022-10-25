import React from 'react';
import ReactDOM from 'react-dom/client';

class ToggleSwitch extends React.Component {
  render() {
    return (
      <button>Toggle Button</button>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<ToggleSwitch />);
