import React, {Component} from 'react'
import TodoForm from './TodoForm'

class Todo extends Component {
  constructor() {
    super();
    this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
    this.editClickedTodo = this.editClickedTodo.bind(this);
  }
  deleteClickedTodo() {
    this.props.onDeleteTodo(this.props.todo);
  }
  editClickedTodo() {
    this.props.onEditTodo(this.props.todo)
  }
  render(){
    return(
     <div className="col s12 m6">
       <div className="card darken-1" data-todos-index={this.props.todo.id}>

         <div className="card-content black-text">
           <p>{this.props.todo.body}</p>
           { this.props.editingTodoId === this.props.todo._id ? 
        <TodoForm
        autoFocus={true}
        onUpdateTodo={this.props.onUpdateTodo}
        buttonName="Update Todo!"/> : '' }
         </div>
         <div className="card-action">
         <a className="waves-effect waves-light btn-small delete" onClick={this.deleteClickedTodo}>Delete</a>
         <a className="waves-effect waves-light btn-small edit" onClick={this.editClickedTodo}>Edit</a>
        </div>
       </div>
     </div>
    )
  }
}

export default Todo