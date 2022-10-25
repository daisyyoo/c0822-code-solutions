import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked < 3) {
      return (
        <button className="zero" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 3 && isClicked < 6) {
      return (
        <button className="three" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 6 && isClicked < 9) {
      return (
        <button className="six" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 9 && isClicked < 12) {
      return (
        <button className="nine" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 12 && isClicked < 15) {
      return (
        <button className="twelve" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 15 && isClicked < 18) {
      return (
        <button className="fifteen" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (isClicked >= 18) {
      return (
        <button className="eighteen" onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}
