import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../redux/actions';

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
  Example: Change from "this.props.dispatch(removePost(1))" to "this.props.removePost(1)".
*/
function mapDispatchToProps(dispatch) {
  return bindActionCreators({removePost}, dispatch);
}

// Create App component to make the Main component connected to the Redux store.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

// App acts as a container component.
export default App;