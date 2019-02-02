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
    }

    render() {
        return (

            <div>
                <h1>PhotoWall</h1>
                <div className="form"> 
                    <form onSubmit={this.handleSubmitHandler}>
                        <input type="text" placeholder="Link"></input>
                        <input type="text" placeholder="Description"></input>
                        <button>POST</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddPhoto;