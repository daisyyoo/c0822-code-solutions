import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: null
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(event) {
    if (event.target.id !== this.state.clickedId) {
      this.setState({ clickedId: event.target.id });
    } else {
      this.setState({ clickedId: null });
    }
  }

  className(id) {
    if (this.state.clickedId === id.toString()) {
      return 'content-box';
    } else {
      return 'content-box hide';
    }
  }

  render() {
    const { toggleOpen } = this;
    const { contentArray } = this.props;
    return (
      contentArray.map(topic => (
        <div key={topic.id}>
          <div id={topic.id} onClick={toggleOpen} className="title-box" >{topic.name}</div>
          <div className={`${this.className(topic.id)}`}>{topic.description}</div>
        </div>
      ))
    );
  }
}
