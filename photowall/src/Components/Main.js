import React, {Component} from 'react';

import List from './List';
import Title from './Title';

class Main extends Component {
  render() {
    let listOne = ['Mow the lawn', 'Walk the dog'];
    let listTwo = ['Cook dinner for Inma', 'Have dinner with Inma'];

    return (
      <div>
        <Title title={"My Task Lists"}/>
        <List tasks={listOne}/>
        <List tasks={listTwo}/>
      </div>
    );
  }
}

export default Main;
