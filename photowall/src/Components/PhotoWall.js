import React, { Component } from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

// Create a stateless function component of PhotoWall.
function PhotoWall(props) {
  return (
    <div>
      <button className="add-icon">+</button>

      <div className="photo-grid">
        {/* PhotoWall Component iterates through an array of Objects and it generates photos of Photo Component
      or Photo Component instances with passing in props. Each Photo instance has a <figure> element. */}
        {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
      </div>

    </div>);
}

// Specify the PropTypes for Photowall component. Allow to specify the required types that must be passed in.
// posts must be array when passed in as props in instance component.
// onRemovePhoto must a function when passed in as props in instance component.
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
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
