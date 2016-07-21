import React, { Component } from 'react';
// import Immutable from 'immutable';
// import Welcome from './welcome';


// example class based component (smart component)
class Note extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      isEditing: false,
    };
    // this.onInputChange = this.onInputChange.bind(this);
    // ^^ not really sure what this does????
  }

  onChange() {

  }

  rendercheck() {
    if (this.state.isEditing) {
      return (<li><i className="fa fa-check" onClick={() => {
        // do other things with the click -> done Editing
        this.setState({ isEditing: false });
      }}></i></li>);
    } else {
      return (<li><i className="fa fa-pencil" onClick={() => {
        // do other things
        this.setState({ isEditing: true });
      }}></i></li>);
    }
  }


  render() {
    return (
      <div className="note">
        <h3 className="header">
          {this.props.title}
          <ul id="icons">
            {this.rendercheck()}
            <li><i className="fa fa-trash" onClick={this.props.onDelete}></i></li>
            <li><i className="fa fa-arrows-alt"></i></li>
          </ul>
        </h3>

        <textarea className="textbox" />
        // <div id="textbox"> // only when
        // {this.props.text} // if is Editing, put a text area --> make a function
        // </div>
      </div>
    );
  }
}

export default Note;
