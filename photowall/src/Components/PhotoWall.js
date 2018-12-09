import React, {Component} from 'react';

import Photo from './Photo';

// Create a stateless function component of PhotoWall.
function PhotoWall(props) {
  return (
    <div className="photo-grid">
      {/* PhotoWall Component iterates through an array of Objects and it generates photos of Photo Component
      or Photo Component instances with passing in props. Each Photo instance has a <figure> element. */}
      {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
    </div>);
}

// class PhotoWall extends Component {
//   render() {
//
//     return (
//       <div className="photo-grid">
//         {/* PhotoWall Component iterates through an array of Objects and it generates photos of Photo Component
//         or Photo Component instances with passing in props. Each Photo instance has a <figure> element. */}
//         {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//       </div>);
//   }
// }

export default PhotoWall;
