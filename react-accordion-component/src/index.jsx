import React from 'react';
import ReactDOM from 'react-dom/client';

// const contentArray = [
//   {
//     name: 'Hypertext Markup Language',
//     description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
//   },
//   {
//     name: 'Cascading Style Sheets',
//     description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markeup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
//   },
//   {
//     name: 'JavaScript',
//     description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
//   }
// ];
class Accordion extends React.Component {
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

// function MakeBoxesFromArray(array) {
//   const show = this.state ? 'hide' : 'show';
//   const boxes = array.map(box =>
//     <div className="title-box" onClick={this.handleClick} key={array.name}>{array.name}
//         <div className={`content-box ${show}`}>{array.description}</div>
//       </div>);
//   return boxes;
// }

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion />);
