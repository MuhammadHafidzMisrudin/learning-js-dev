/// Action creators.

// Add action remove function.
// Return a js object that describes the event that should update the application state.
function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

// Add action adding post function.
