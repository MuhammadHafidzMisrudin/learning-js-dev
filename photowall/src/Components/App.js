import Main from './Main';
import { connect } from 'react-redux';

/*
  App component connects the store to Main component.
*/

function mapStateToProps(state) {
    return {
        posts: state
    }
}

// Create App component to make the Main component connected to the Redux store.
const App = connect(mapStateToProps)(Main);

// App acts as a container component.
export default App;