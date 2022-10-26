import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  getModalName() {
    const isOpen = this.state.isOpen;
    if (isOpen) {
      return 'show';
    } else {
      return 'hidden';
    }
  }

  render() {
    const modalName = this.getModalName();
    return (
      <div className="background">
        <div>
          <i onClick={this.handleClick} className="fa-solid fa-bars"></i>
        </div>
        <div className={`modal-container ${modalName}`}>
          <div className="modal">
            <div className="row">
              <header>Menu</header>
            </div>
            <div className="row">
              <ul>
                <li>
                  <a href='#' onClick={this.handleClick}>About</a>
                </li>
                <li>
                  <a href='#' onClick={this.handleClick}>Get Started</a>
                </li>
                <li>
                  <a href='#' onClick={this.handleClick}>Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
