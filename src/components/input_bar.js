import React, { Component } from 'react';


class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    // this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // add this above your render method
  // onInputChange(event) {
  //   event.preventDefault();
  //   this.setState({ title: event.target.value });
  //   this.props.createNote(this.state.title);
  //   console.log(event.target.value);
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
    this.props.createNote(this.state.title);
    console.log(event.target.value);
    console.log(`this is state's title: ${this.state.title}`);
  }


  render() {
    return (
      <div className="inputbar">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="enter a note" />
          <button onClick={this.handleSubmit}>{'Create'}</button>
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
