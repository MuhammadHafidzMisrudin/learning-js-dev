import React, { Component } from 'react';

// Create a class component of AddPhoto.
// For AddPhoto screen.
class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmitHandler = this.handleSubmitHandler.bind(this);
    }

    handleSubmitHandler(event) {
        event.preventDefault();
        console.log(event.target.elements.link.value);
        console.log(event.target.elements.description.value);

        // Initialise variables to store input values from the form.
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;

        // Create a new post object.
        const newPost = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        // If input link and description is not null.
        if (imageLink && description) {

            // Pass newPost object into onAddPhoto prop.
            // this.props.onAddPhoto(newPost); 

            // Emit the Redux action addPost method.
            // Upon emitting this action, it will go to the reducer.
            this.props.addPost(newPost);
            this.props.onHistory.push('/'); // Passed as props to navigate back to the Main page after adding new post.
        }
    }

    render() {
        return (

            <div>
                <h1>PhotoWall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmitHandler}>
                        <input type="text" placeholder="Link" name="link"></input>
                        <input type="text" placeholder="Description" name="description"></input>
                        <button>POST</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddPhoto;