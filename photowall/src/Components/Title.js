import React, {Component} from 'react';

import List from './List';

// Create a stateless function component of Title.
function Title(props) {
  return (
    <h1>{props.title}</h1>
  )
}

// class Title extends Component {
//   render() {
//     return (
//       <h1>{this.props.title}</h1>
//     )
//   }
// }

export default Title;
