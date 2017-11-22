// src/components/CreateTodoForm.js
import React, {Component} from 'react'

// inside src/components/CreateTodoForm.js
class CreateTodoForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
      todo: ''
    }
  }

  onInputChange(event){
    console.log('create todo input changed')
    this.setState({
      todo: event.target.value
    })
  }

onFormSubmit(event){
  event.preventDefault()
  let newTodo = this.state.todo
  this.props.createTodo(newTodo)
  this.setState({
    todo: ""
  })
}


  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm