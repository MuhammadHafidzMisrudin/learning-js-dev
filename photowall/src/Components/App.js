import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router';
// import { removePost, addPost } from '../redux/actions';

/*
  App component connects the store to Main component.
*/
function mapStateToProps(state) {
  return {
    posts: state
  }
}

/* 
  Function to provide a shorthand for removePost action method inside of Main component.
  Example: Change from "this.props.dispatch(removePost(index))" to "this.props.removePost(index)".
*/
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch); // or bindActionCreators({ removePost, addPost}, dispatch)
}

// Create App component to make the Main component connected to the Redux store.
// Wrap the connecting component to the Redux store with the Redux React router.
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

// App acts as a container component.
export default App;