import React, {Component} from 'react';

import Main from './Components/Main';
import ReactDOM from 'react-dom';

// const tasks = ['Call Inma', 'Meet Inma', 'Give Inma A Kiss'];

// const element = React.createElement('ol', null,
//   tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

// const element = (
//   <div>
//     <h1>My Tasks</h1>
//     <ol>
//       { tasks.map((task, index) => <li key={index}>{task}</li>) }
//     </ol>
//   </div>
// )

// class Title extends Component {
//   render() {
//     return (
//       // <h1>My Tasks</h1>
//       <h1>{this.props.title}</h1>
//     )
//   }
// }

// class List extends Component {
//   render() {
//
//     return (
//       <ol>
//         {
//           /* { tasks.map((task, index) => <li key={index}>{task}</li>) } */
//           this.props.tasks.map((task, index) => <li key={index}>{task}</li>)
//         }
//       </ol>
//     );
//   }
// }

// class Main extends Component {
//
//   render() {
//     var listOne = ['Mow the lawn', 'Walk the dog'];
//     var listTwo = ['Cook dinner for Inma', 'Dinner with Inma'];
//     return (
//       <div>
//         <Title title={"My Task Lists"}/>
//         <List tasks={listOne}/>
//         <List tasks={listTwo}/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(element, document.getElementById('root'));

// Render an instance of Main Component that renders all subcomponents.
ReactDOM.render(<Main/>, document.getElementById('root'));
