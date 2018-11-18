import React, {Component} from 'react';

import List from './List';

class Title extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default Title;
