import posts from '../data/posts';
import { combineReducers } from 'redux';

// Create a reducer for state of posts.
// Use a reducer to populate the store with initial or current state.
// Reducer to update the state of posts.
function posts(state = posts, action) {
    console.log(action.index);

    // Updating the state without directly modifying or writing or changing it.
    switch (action.type) {
        case 'REMOVE_POST':
            /*
                If the remove action gets dispatched, it returns the entire of posts such that it doesn't
                include the post in which is selected to be removed when button clicked. It will slice off
                the elements of array from the index 0 to the specified one, and it slices off the elements after
                the specified element to be removed. Then it destructuring both sliced array segments and form new state.
            */
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD_POST':
            /*
                If the addpost action gets dispatched, it returns the current state of the current array of posts,
                and will contain and add a new post that submitted from the form.
            */
            return [...state, action.post];
        default:
            // First load return initial value.
            return state;
    }
}

// Create a reducer for state of comments.
// Reducer to update the state of comments.
function comments(state = [], action) {
    return state;
}

// Combine two reducers (posts and comments) into a single root reducer.
// Pass in the object that is reference to two reducer functions.
const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
// export default postReducer;