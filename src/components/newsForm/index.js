import React, { Component } from 'react';
import './newsForm.css';

export default class Form extends Component {

    render() {
        return (
            <form  className="form bg-dark text-light">
                <h3>Add a news item</h3>
                <div className="form-group">
                    <input type="text" id="title_f"
                           className="form-control"
                           placeholder="Title"></input>
                </div>
                <div className="form-group">
                    <input type="text" id ="author_f"
                           className="form-control"
                           placeholder="Author"></input>
                </div>
                <div className="form-group">
                    <input type="text" id ="link_f"
                           className="form-control"
                           placeholder="Link"></input>
                </div>
                <button type="submit" className="btn btn-primary" >Add</button>
            </form>
        );
    }
}
