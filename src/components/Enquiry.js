import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { createPostAction } from "../redux/Actions/postActions";

export class Enquiry extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:"",
            query:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }
  
    handleChange(evt){
        const {name,value} = evt.target;
        this.setState({[name]:value});
    }
    
    handleForm(evt){
        evt.preventDefault();
        const newPost = {...this.state,id:uuidv4()}
        this.props.createPostAction(newPost);
        this.setState({
            fullname:"",
            query:""
        });
    }


  render() {
    return (
      <div className="container enquiry">
        <form onSubmit={this.handleForm}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              onChange={this.handleChange}
              name="fullname"
              value={this.state.fullname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Your Query</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Write your query here..."
              onChange={this.handleChange}
              name="query"
              value={this.state.query}
            />
          </div>
          <button type="submit" role="submitButton" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// export default Enquiry;
export default connect(null,{ createPostAction })(Enquiry);
