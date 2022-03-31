import React, { Component } from "react";
import Enquiry from "./Enquiry";

export class Support extends Component {
  constructor(props){
    super(props);
    this.state = {open:false};
    this.handleClick =this.handleClick.bind(this);
  }
  handleClick(){
    this.setState((prev)=>{
      return {open:!prev.open};
    });
  }

  render() {
    return (
      <div>
        <h4>
          Do you have any query? Click the button below to share the details with us
        </h4>
        <button role="queryButton" className="btn btn-primary" onClick={this.handleClick}>Click Here</button>
        {this.state.open && <Enquiry />}
      </div>
    );
  }
}

export default Support;
