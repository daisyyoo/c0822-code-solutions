import React from 'react';
export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      currentCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  count() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  handleClick() {
    if (this.state.isStarted === true) {
      this.setState({ isStarted: false });
      clearInterval(this.timerID);
    } else if (this.state.isStarted === false) {
      this.setState({ isStarted: true });
      this.timerID = setInterval(
        () => this.count(), 1000
      );
    }
  }

  resetCount() {
    if (this.state.isStarted === false) {
      this.setState({ currentCount: 0 });
    }
  }

  render() {
    const iconStatus = this.state.isStarted ? 'fa-pause' : 'fa-play';
    const countNumber = this.state.currentCount;
    return (
      <div className="container">
        <div className="watch-background">
          <div onClick={this.resetCount} className="watch-face">{countNumber}</div>
        </div>
        <i onClick={this.handleClick} className={`fa-solid ${iconStatus}`}></i>
      </div>
    );
  }
}
