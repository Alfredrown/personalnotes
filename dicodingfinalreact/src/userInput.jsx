import React from 'react';

  class UserInput extends React.Component {
    constructor(props) {
      super(props);
    
    this.state={title:'',body:''};
    
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
    onTitleChange(event) {
        this.setState({ title: event.target.value });
      }
    
      onBodyChange(event) {
        this.setState({ body: event.target.value });
      }
    
      onSubmit(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
        console.log('Submitted:', this.state);
        this.state={title:'',body:''};

      }
    render() {
      return (
       <form className='contact-input' onSubmit={this.onSubmit}>
       <input type="text" placeholder="title" value={this.state.title} onChange={this.onTitleChange} />
       <input type="text" placeholder="body" value={this.state.body} onChange={this.onBodyChange} />
       <button type="submit">Add</button>
     </form>
      );
    }
  }
  export default UserInput;