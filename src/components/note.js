import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';


// example class based component (smart component)
class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.onDelete = this.onDelete.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.props.updateNote(this.props.id, { text: event.target.value });
    console.log(event.target.value);
  }


  onDelete() {
    this.props.deleteNote(this.props.id);
  }

  onDrag(e, ui) {
    this.props.updateNote(this.props.id, { x: ui.x, y: ui.y });
  }


  rendercheck() {
    if (this.state.isEditing) {
      return (<i className="fa fa-check" onClick={() => {
        this.setState({ isEditing: false });
      }}></i>);
    } else {
      return (<i className="fa fa-pencil" onClick={() => {
        this.setState({ isEditing: true });
      }}></i>);
    }
  }

  renderedit() {
    if (this.state.isEditing) {
      return (
        <div id="textbox">
          <Textarea minRows={6} value={this.props.note.text} onChange={this.onChange} />
        </div>
      );
    } else {
      return (
        <div className="text" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />
      );
    }
  }


  render() {
    return (

      <Draggable
        handle=".icons"
        grid={[20, 20]}
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
              {this.rendercheck()}
              <i className="fa fa-trash" onClick={this.onDelete}></i>
            </div>
            <div className="icons">
              <i className="fa fa-arrows-alt"></i>
            </div>
          </h3>
          {this.renderedit()}
        </div>

      </Draggable>
    );
  }
}


export default Note;
