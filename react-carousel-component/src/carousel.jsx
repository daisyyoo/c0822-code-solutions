import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setOpenPic(), 1000);
  }

  setOpenPic(array) {
    const thisArray = this.props.array;
    if (this.state.currentIndex < thisArray.length) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else if (this.state.currentIndex > thisArray.length) {
      this.setState({ currentIndex: 0 });
    }
  }

  getPicIndex(event) {
    const newIndex = event.target.id;
    // have to check if this can get the index of the button
    this.setOpenPic(newIndex);
  }

  goLeft(event) {
    clearInterval(this.timerID);
    this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.getPicIndex(event);
    // this.setOpenPic();
  }

  goRight(event) {
    clearInterval(this.timerId);
    this.getPicIndex(event);
  }

  render() {
    const thisArray = this.props.array;
    const { setOpenPic } = this;
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
              <RenderImages array={thisArray} setOpenPic={setOpenPic} />
            </div>
            <div className="bottom-nav">
              <MakeButtons array={thisArray} getPicIndex={getPicIndex} />
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

function RenderImages({ array, setOpenPic }) {
  return (
    <React.Fragment>
      {
        array.map(pokemon => {
          return (
            <img key={pokemon.id}
              className={ setOpenPic ? 'show' : 'hide'}
            src={pokemon.url}></img>
          );
        })
      }
    </ React.Fragment>
  );
}

function MakeButtons({ array, getPicIndex }) {
  return (
    <React.Fragment>
      {
        array.map((pokemon, index) => {
          return (
            <i key={pokemon.id} id={index} onClick={getPicIndex}
            className={ getPicIndex ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} />
          );
        })
      }
    </React.Fragment>
  );
}
