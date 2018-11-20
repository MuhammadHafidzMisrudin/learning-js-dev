import React, {Component} from 'react';

import Photo from './Photo';

class PhotoWall extends Component {
  render() {

    return (
      <div className="photo-grid">
        {/*PhotoWall Component iterates through an array of Objects and it generates photos of Photo Component
        or Photo Component instances with pass in props. Each Photo instance has a <figure> element.*/}
        {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
      </div>);
  }
}

export default PhotoWall;
