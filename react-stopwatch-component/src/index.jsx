import React from 'react';
import ReactDOM from 'react-dom/client';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      currentCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  stopWatchRunning() {
    this.timerID = setInterval(
      () => this.count(), 1000
    );
  }

  stopWatchPaused() {
    clearInterval(this.timerID);
  }

  count() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  handleClick() {
    this.setState({
      isStarted: !this.state.isStarted,
      currentCount: this.stopWatchRunning()
    });
  }

  render() {
    const iconStatus = this.state.isStarted ? 'fa-pause' : 'fa-play';
    const countNumber = this.state.currentCount;
    return (
      <div className="container">
        <div className="watch-background">
          <div className="watch-face">{countNumber}</div>
        </div>
        <i onClick={this.handleClick} className={`fa-solid ${iconStatus}`}></i>
      </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Stopwatch />);
