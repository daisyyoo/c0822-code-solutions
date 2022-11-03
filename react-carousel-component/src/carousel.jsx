import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.carousel = this.carousel.bind(this);
    this.getPicIndex = this.getPicIndex.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.carousel(this.state.currentIndex), 1000);
  }

  carousel() {
    const { picArray } = this.props;
    if (this.state.currentIndex < picArray.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else if (this.state.currentIndex === picArray.length - 1) {
      this.setState({ currentIndex: 0 });
    }
  }

  getPicIndex(event) {
    clearInterval(this.timerID);
    const newIndex = Number(event.target.id);
    this.setState({ currentIndex: newIndex });
    this.timerID = setInterval(() => this.carousel(this.state.currentIndex), 1000);
  }

  goLeft(event) {
    const { picArray } = this.props;
    clearInterval(this.timerID);
    if (this.state.currentIndex <= picArray.length - 1 && this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    } else if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: picArray.length - 1 });
    }
    this.timerID = setInterval(() => this.carousel(this.state.currentIndex), 1000);
  }

  goRight(event) {
    const { picArray } = this.props;
    clearInterval(this.timerID);
    if (this.state.currentIndex < picArray.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else if (this.state.currentIndex === picArray.length - 1) {
      this.setState({ currentIndex: 0 });
    }
    this.timerID = setInterval(() => this.carousel(this.state.currentIndex), 1000);
  }

  render() {
    const { picArray } = this.props;
    const { getPicIndex } = this;
    const { goLeft } = this;
    const { goRight } = this;

    return (
      <div className="container">
        <div className="row">
          <div className="left-arrow col-3">
            <i className="fa-sharp fa-solid fa-circle-arrow-left" onClick={ goLeft }></i>
          </div>
          <div className="image-container col-3">
            <div className="images">
              {
                picArray.map(pokemon => {
                  return (
                    <img key={pokemon.id}
                      className={pokemon.id === this.state.currentIndex ? 'show' : 'hide'}
                      src={pokemon.url}></img>
                  );
                })
              }
              </div>
            <div className="bottom-nav">
              {
                picArray.map(pokemon => {
                  return (
                    <i key={pokemon.id} id={pokemon.id} onClick={ getPicIndex}
                      className={pokemon.id === this.state.currentIndex ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} />
                  );
                })
              }
            </div>
          </div>
          <div className="right-arrow col-3">
            <i className="fa-sharp fa-solid fa-circle-arrow-right" onClick={ goRight }></i>
          </div>
        </div>
      </div>
    );
  }
}
