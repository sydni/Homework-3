import React, { Component } from 'react';


class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
    // this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  // add this above your render method
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
    console.log(`this is state's title: ${this.state.title}`);
  }
// <form onSubmit={this.handleSubmit}>
// <button className="button" onClick={this.handleSubmit}>{'Create'}</button>


  render() {
    return (
      <div className="inputbar">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onInputChange} placeholder="enter a note" />
          <button className="button">{'Create'}</button>
        </form>
      </div>
    );

    // return (
    //   <div>
    //     <input onChange={this.onInputChange} value={this.state.searchterm} />
    //   </div>
    // );
  }
}

export default InputBar;
