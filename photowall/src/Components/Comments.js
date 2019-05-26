import React, { Component } from 'react';

// Create a class component of Comment.
class Comments extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // Prevent the default behavior of refreshing the page upon form submission.
        event.preventDefault(); 

        // Access values (comments) in the form input.
        console.log(event.target.elements.comment.value);
        const comment = event.target.elements.comment.value;

        // Emit the Redux action addComment method.
        // Upon emitting this action, it will go to the reducer and update the state.
        this.props.addComment(comment);
    }

    render() {
        return (
            <div className="comment">
                {
                    this.props.comments.map((comment, index) => {
                        return (
                            <p key={index}>{comment}</p>
                        )
                    })
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;