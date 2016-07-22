import React, { Component } from 'react';


class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.createNote(this.state.title);
    console.log(event.target.value);
    this.setState({ title: '' });
    console.log(event.target.value);
  }


  render() {
    return (
      <div className="inputbar">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onInputChange} placeholder="enter a note" value={this.state.title} />
          <button className="button">{'Create'}</button>
        </form>
      </div>
    );
  }
}

export default InputBar;
