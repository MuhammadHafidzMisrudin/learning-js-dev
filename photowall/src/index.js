import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Call Inma', 'Meet Inma', 'Kiss Inma'];

const element = React.createElement('ol', null,
  tasks.map((task, index) => React.createElement('li', {key: index}, task))
);

ReactDOM.render(element, document.getElementById('root'));
