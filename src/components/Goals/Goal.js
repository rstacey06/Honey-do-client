import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class Goal extends Component {

    render() {
        return(
            <div>
                <Icon className="pointer" name='delete' color='red' onClick={() => this.props.deleteGoal(this.props.id)} />{this.props.description}
            </div>
        )
    }
}
