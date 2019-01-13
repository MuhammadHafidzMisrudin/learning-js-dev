import React, { Component } from 'react';

import PhotoWall from './PhotoWall';
import Title from './Title';

// const posts = [{
//   id: "0",
//   description: "beautiful landscape",
//   imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//   "3919321_1443393332_n.jpg"
//  }, {
//   id: "1",
//   description: "Aliens???",
//   imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//   "08323785_735653395_n.jpg"
//  }, {
//   id: "2",
//   description: "On a vacation!",
//   imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
// }];

class Main extends Component {

  // Initialise a constructor to initialise initial state. (of posts list).
  constructor() {
    super();
    this.state = {
      posts: []
    }

    // Bind a removePhoto() in Constructor.
    this.removePhoto = this.removePhoto.bind(this);
    console.log('constructor');
  }

  // Get invoked after render to update the component state props, posts by fetching data.
  // Hint: lifecycle only for fetching data from database.
  componentDidMount() {
    console.log('componentDidMount');
    const data = SimulateFetchFromDatabase();
    this.setState({
      posts: data
    });
  }

  // Get invoked before render method.
  componentWillMount() {
    console.log('componentWillMount');
  }

  // Get invoked when the component re-render.
  // After update the state of component and trigger a render.
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    alert("re-render");
    console.log(prevState.posts);
    console.log(this.state);
  }

  // Add a function to remove Photo.
  removePhoto(postRemoved) {

    // Debug current state of single post.
    console.log(postRemoved.description + " post gets removed!");

    // Update the state of posts (Component).
    // Filter out the removed post from the current state of array (posts)
    // Return the updated state of new posts list.
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  // Render the Component instances of Title and PhotoWall.
  // Pass posts list and removePhoto() as props to Photowall component.
  render() {
    console.log('render');
    return (
      <div>
        <Title title={"PhotoWall"}/>
        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
      </div>
    );
  }
}

function SimulateFetchFromDatabase() {
  return [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
  }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
      "08323785_735653395_n.jpg"
  }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
  }];
}

export default Main;
