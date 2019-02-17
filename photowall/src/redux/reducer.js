import posts from '../data/posts';

// Create a reducer for state of posts.
// Use a reducer to populate the store with initial or current state.
const postReducer = function posts(state = posts, action) {
    console.log(action.index);
    return state;
}

export default postReducer;