import React from 'react';
import ReactDOM from 'react-dom/client';
// import Accordion from './accordion';

const contentArray = [
  {
    name: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    name: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markeup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    name: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(event) {
    if (event.target.id === event.target.textContent) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    const { toggleOpen } = this;
    const { isOpen } = this.state;
    const { contentArray } = this.props;
    const show = isOpen ? 'hide' : 'show';
    return (
      contentArray.map(topic => (
        <div key={topic.name}>
          <div id={topic.name} className="title-box" onClick={toggleOpen}>{topic.name}</div>
          <div className={`content-box ${show}`}>{topic.description}</div>
        </div>
      ))
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion contentArray={contentArray}/>);
