import React, { Component } from 'react';
import { addTodo } from '../../actions/todosActions';
import { connect } from 'react-redux';

class TodoInput extends Component {

  state = {
      target: "",
      plan: ""
  }

  render(){
    return(
      <div>
      GoalInput
      </div>
    )
  }
}
export default connect(null, { addGoal })(GoalInput);
