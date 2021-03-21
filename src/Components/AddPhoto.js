import React, {Component} from "react";

class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if(imageLink && description){
            this.props.onAddPhoto(post);
        }
    }

    render(){
        return  (
                    <div>
                        <h2>Add a new photo</h2>
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="Link" name="link"></input>
                                <input type="text" placeholder="Description" name="description"></input>
                                <button>Add Photo</button>
                            </form>
                        </div>
                    </div>
                )
    }
}

export default AddPhoto