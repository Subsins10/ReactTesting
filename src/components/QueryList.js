import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts }  from "../redux/Actions/postActions";


const makeStateToProp = (state) => ({
  queryList: state.posts.items
});


class QueryList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('props',this.props);
    const posts = this.props.queryList.map((que) => (
      <div key={que.id}>
        <h5>{que.fullname}</h5>
        <p>{que.query}</p>
      </div>
    ));
    return (
      <div className="enquiry m-5">
        <h4>List of Queries</h4>
        {posts}
      </div>
    );
  }
}


export default connect(makeStateToProp, { fetchPosts })(QueryList);