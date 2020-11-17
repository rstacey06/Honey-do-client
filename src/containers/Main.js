import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import TodoInput from '../components/Todos/TodoInput';
import TodosContainer from './TodosContainer';
import GoalsContainer from './GoalsContainer';
import MainHeader from '../components/MainHeader';
import { Container } from 'semantic-ui-react';

class Main extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Container>
          <NavBar />

         <Container>
           <Route />
           <Route />
           <Route />
           <Route />
         </Container>
       </Container>
    </div>
        )
    }
}
export default Main;
