
import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  getTogglePosition() {
    const { isClicked } = this.state;
    if (isClicked === false) return 'left';
    if (isClicked === true) return 'right';
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    const togglePosition = this.getTogglePosition();
    return (
      <div
        className="background">
        <div
          onClick={this.handleClick}
          className={`toggle-button ${togglePosition}`}>
        </div>
      </div>
    );
  }
}
