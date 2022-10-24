import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked === true) {
      return <button onClick={this.handleClick}>Thanks!</button>;
    } else {
      return <button onClick={this.handleClick}>Click Me!</button>;
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);
