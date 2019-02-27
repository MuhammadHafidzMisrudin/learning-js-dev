import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import Title from './Title';
import AddPhoto from './AddPhoto';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { removePost } from '../redux/actions';

// Main component as a top level component to render its subcomponents.
class Main extends Component {

  // Initialise a constructor to initialise initial state. (of posts list).
  constructor() {
    super();
    // this.state = {
    //   posts: [{
    //     id: 0,
    //     description: "beautiful landscape",
    //     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    //       "3919321_1443393332_n.jpg"
    //   }, {
    //     id: 1,
    //     description: "Aliens???",
    //     imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
    //       "08323785_735653395_n.jpg"
    //   }, {
    //     id: 2,
    //     description: "On a vacation!",
    //     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    //   }],
    //   screen: "photos" // Flag to display either photowall screen or addphoto screen.   
    // }

    // Bind additional methods in Constructor.
    // this.removePhoto = this.removePhoto.bind(this);
    // this.navigate = this.navigate.bind(this);
    console.log('constructor');
  }

  // Get invoked after render to update the component state props, posts by fetching data.
  // Hint: lifecycle only for fetching data from database.
  componentDidMount() {
    console.log('componentDidMount');
    // this.props.removePost(1);
  }

  // Get invoked before render method.
  componentWillMount() {
    console.log('componentWillMount');
  }

  // Get invoked when the component re-render.
  // After update the state of component and trigger a render.
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    // console.log(prevState.posts);
    // console.log(this.state);
  }

  // Add a function to remove Photo.
  // removePhoto(postRemoved) {

  //   // Debug current state of single post.
  //   console.log(postRemoved.description + " post gets removed!");

  //   // Update the state of posts (Component).
  //   // Filter out the removed post from the current state of array (posts)
  //   // Return the updated state of new posts list.
  //   this.setState((state) => ({
  //     posts: state.posts.filter(post => post !== postRemoved)
  //   }));
  // }

  // Add a functoin to update the state of posts - Add new photos.
  // addNewPhoto(postSubmitted) {

  //   // Update the current post and add a new post which submitted by the form using concat().
  //   // Concatenate the submitted new post as a piece of array.
  //   // Thus it will return a new array.
  //   this.setState((state) => ({
  //     posts: state.posts.concat([postSubmitted])
  //   }))
  // } 

  // Render the Component instances of Title and PhotoWall.
  // Pass posts list and removePhoto() as props to Photowall component.
  render() {
    console.log('render');
    console.log(this.props);
    console.log(this.props.posts);
    return (
      <div>

        <h1>
          <Link to="/">PhotoWall</Link>
        </h1>

        {/* 
            Instead of using state for changes of UI when rendered, use the React route to change the UI that
            matches the browser url.

            Add Route component that passes in render as props to invoke specific UI components.
            Spread operator (i.e, {...this.props}) equivalent to <PhotoWall posts=this.props.posts remove=this.props.removePost/>
        */}
        <Route exact path="/" render={() => (
          <div>
            {/* <Title title={"PhotoWall"} /> */}
            <PhotoWall {...this.props} />
          </div>
        )} />

        {/* 
            Multiple UI components must be enclosed by <div> in render method property,
            otherwise simply use the component property for single UI component.
            e.g: <Route exact path="/AddPhoto" component={AddPhoto}/>

            Add Route component that passes in render as props to invoke specific UI components.
            Spread operator (i.e, {...this.props}) is passed in as AddPhoto props to have access to Redux store and actions.
        */}
        <Route exact path="/AddPhoto" render={({ history }) => (
          <AddPhoto {...this.props} onHistory={history} />
        )} />

      </div>
    );
  }
}

export default Main;
