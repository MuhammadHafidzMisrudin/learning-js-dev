import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Call Inma', 'Meet Inma', 'Give Inma A Kiss'];

// const element = React.createElement('ol', null,
//   tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

const element = (
  <div>
    <h1>My Tasks</h1>
    <ol>
      { tasks.map((task, index) => <li key={index}>{task}</li>) }
    </ol>
  </div>
)

ReactDOM.render(element, document.getElementById('root'));
