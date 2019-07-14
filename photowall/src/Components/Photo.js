import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Create a stateless function component of Photo.
// Stateless function component only returns render method which does not contain component lifecycles.
function Photo(props) {

  // Create post variable and set as Component instance that is passed in as props.
  const post = props.post;
  return (
    <figure className="figure">

      <Link to={`/single/${post.id}`}>
        {/* Add Link tag to redirect to the Single photo component with its given post id when clicked. */}
        <img className="photo" src={post.imageLink} alt={post.description}></img>
      </Link>

      <figcaption>
        <p>{post.description}</p>
      </figcaption>

      <div className="button-container">

        {/* Emit removePost() action with index param that passed in as prop which triggered by onClick event handler. 
            Then remove action goes to Redux reducer. Remove post reducer updates the posts state
            
            Upon deleting the photo, it will navigate back to the main page. */}
        <button className="remove-button" onClick={() => {
          props.removePost(props.index);
          props.history.push('/');
        }}>Remove</button>

        <Link className="button" to={`/single/${post.id}`}>
          <div className="comment-count">
            <div className="speech-bubble"></div>

            {/* Display the number of comments. If the comments post id has value, will return the length of that array.
                Otherwise, if it is undefined, returns zero. */}
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>
        </Link>
      </div>

    </figure>);
}

// Specify the PropTypes for Photo component. Allow to specify the required types that must be passed in.
// Single post must be an object when passed in as props in instance component.
// onRemovePhoto must a function when passed in as props in instance component.
Photo.propTypes = {
  post: PropTypes.object.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired
}

// class Photo extends Component {
//   render() {
//     // Create post variable and set as Component instance that is passed in as props.
//     const post = this.props.post;
//     return (
//       <figure className="figure">
//         <img className="photo" src={post.imageLink} alt={post.description}></img>
//         <figcaption>
//           <p>{post.description}</p>
//         </figcaption>
//
//         <div className="button-container">
//           <button className="remove-button">Remove</button>
//         </div>
//       </figure>);
//   }
// }

export default Photo;
