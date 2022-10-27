import React from 'react';
import ReactDOM from 'react-dom/client';
// import Accordion from './accordion';

const contentArray = [
  {
    id: 1,
    name: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    id: 2,
    name: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markeup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    id: 3,
    name: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: null,
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  isOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleOpen(event) {
    this.setState({ clickedId: event.target.id });
  }

  className(event) {
    if (this.state.clickedId === '1') {
      return 'hide';
    } else {
      return 'show';
    }
  }

  render() {
    const { toggleOpen } = this;
    const { contentArray } = this.props;
    const className = this.className();
    return (
      contentArray.map(topic => (
        <div key={topic.id}>
          <div id={topic.id} onClick={toggleOpen} className="title-box" >{topic.name}</div>
          <div className={`content-box ${className}`}>{topic.description}</div>
        </div>
      ))
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion contentArray={contentArray}/>);
