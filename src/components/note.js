import React, { Component } from 'react';
import Draggable from 'react-draggable';
// import Immutable from 'immutable';
// import Welcome from './welcome';


// example class based component (smart component)
class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.onDelete = this.onDelete.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ text: event.target.value });
    console.log(event.target.value);
  }

  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.createNote(this.state.title);
    console.log(event.target.value);
    console.log(`this is state's title: ${this.state.title}`);
  }


  onDelete() {
    this.props.deleteNote(this.props.id);
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
      <Draggable
        handle=".note-mover"
        grid={[25, 25]}
        defaultPosition={{ x: 20, y: 20 }}
        position={{ x: this.props.note.x, y: this.props.note.y }}
        onStart={this.onStartDrag}
        onDrag={this.onDrag}
        onStop={this.onStopDrag}
      >

        <div className="note">
          <h3 className="header">
            <div className="title">
              {this.props.note.title}
            </div>
            <div className="icons">
              <ul id="icons">
                {this.rendercheck()}
                <li><i className="fa fa-trash" onClick={this.onDelete}></i></li>
                <li><i className="fa fa-arrows-alt"></i></li>
              </ul>
            </div>
          </h3>
          <div className="textbox">
            <textarea onChange={this.onChange} />
          </div>
        </div>

      </Draggable>
    );
  }
}

// <div id="textbox"> // only when
// {this.props.text} // if is Editing, put a text area --> make a function
// </div>

export default Note;
