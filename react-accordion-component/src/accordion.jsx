import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HTML: true,
      CSS: false,
      JS: false
    };
    this.handleHTMLClick = this.handleHTMLClick.bind(this);
    this.handleCSSClick = this.handleCSSClick.bind(this);
    this.handleJSClick = this.handleJSClick.bind(this);
  }

  handleHTMLClick() {
    this.setState({ HTML: !this.state.HTML });
  }

  handleCSSClick() {
    this.setState({ CSS: !this.state.CSS });
  }

  handleJSClick() {
    this.setState({ JS: !this.state.JS });
  }

  render() {
    const showHTML = this.state.HTML ? 'hide' : 'show';
    const showCSS = this.state.CSS ? 'hide' : 'show';
    const showJS = this.state.JS ? 'hide' : 'show';
    return (
      <div className="container">
        <div onClick={this.handleHTMLClick} className="title-box">Hypertext Markup Language</div>
        <div className={`content-box ${showHTML}`}>content</div>
        <div onClick={this.handleCSSClick} className="title-box">Cascading Style Sheets</div>
        <div className={`content-box ${showCSS}`}>more content</div>
        <div onClick={this.handleJSClick} className="title-box">JavaScript</div>
        <div className={`content-box ${showJS}`}>more more content</div>
      </div>
    );
  }
}
