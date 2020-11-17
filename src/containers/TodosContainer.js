import React, { Component } from 'react';
// import Todos from '../components/Todos/Todos';
// import TodoInput from '../components/Todos/TodoInput';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions/todosActions';
// import { Container } from 'semantic-ui-react';
// import TodosHeader from '../components/Todos/TodosHeader';

class TodosContainer extends Component {

  componentDidMount(){
      this.props.fetchTodos()
  }

  render() {
        return(
          // will need to fill out our return

        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todosData
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: id => dispatch(deleteTodo(id))
})

// connect to our store
// mapStateToProps: we want access to what's in the store
// mapDispatchToProps: we want the ability to dispatch new actions to our store from our component
export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);
