import React, {Component} from 'react';

// Create a stateless function component of Photo.
function Photo(props) {

  // Create post variable and set as Component instance that is passed in as props.
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description}></img>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>

      <div className="button-container">

        {/* Invoke removePhoto() with param that passed in as prop which triggered by onClick event handler */}
        <button className="remove-button" onClick={() => {props.onRemovePhoto(post)}}>Remove</button>
      </div>
    </figure>);
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
