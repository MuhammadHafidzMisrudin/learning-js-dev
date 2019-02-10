import React, { Component } from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Create a stateless function component of PhotoWall.
// Stateless function component only returns render method which does not contain component lifecycles.
function PhotoWall(props) {
  return (
    <div>

      {/* Add button link using Link component to change the path of url for addphoto. */}
      <Link className="add-icon" to="/AddPhoto"></Link>
      {/* Use hyperlink tag for addphoto button. */}
      {/* <a className="add-icon" href="#AddPhoto" onClick={props.onNavigate}></a> */}
      {/* <button className="add-icon" onClick={() => {props.onNavigate()}}>+</button> */}

      <div className="photo-grid">
        {/* 
            PhotoWall Component iterates through an array of Objects and it generates photos of Photo Component
            or Photo Component instances with passing in props. Each Photo instance has a <figure> element.
            
            Update: sort all of the post in descending order based on which one is more recent with its id.
        */}
        {props.posts
          .sort((x, y) => y.id - x.id)
          .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
      </div>

    </div>);
}

// Specify the PropTypes for Photowall component. Allow to specify the required types that must be passed in.
// posts must be array when passed in as props in instance component.
// onRemovePhoto must a function when passed in as props in instance component.
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired
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
