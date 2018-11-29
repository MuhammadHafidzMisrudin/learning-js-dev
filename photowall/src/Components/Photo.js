import React, {Component} from 'react';

class Photo extends Component {
  render() {
    // Create post variable and set as Component instance that is passed in as props.
    const post = this.props.post;

    return (
      <figure className="figure">
        {/* <img src={post.imageLink}></img> */}
      </figure>);
  }
}

export default Photo;
