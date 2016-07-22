import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';
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
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.props.updateNote(this.props.id, { text: event.target.value });
    console.log(event.target.value);
  }

  // onSubmit(event) {
  //   event.stopPropagation();
  //   event.preventDefault();
  //
  //   console.log(event.target.value);
  //   console.log(`this is state's text: ${this.state.text}`);
  // }


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


  renderedit() {
    if (this.state.isEditing) {
      return (
        <div className="textbox">
          <textarea value={this.props.note.text} onChange={this.onChange} />
        </div>
      );
    } else {
      return (
        <div className="text" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />

      );
      // display the text as a body
    }
  }

  onDrag(e, ui) {
    this.props.updateNote(this.props.id, { x: ui.x, y: ui.y });
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
          {this.renderedit()}
        </div>

      </Draggable>
    );
  }
}


export default Note;
