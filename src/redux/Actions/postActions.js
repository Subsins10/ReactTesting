import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch =>{
  axios.get(' http://localhost:3000/queries').then(res => {
    console.log('get actions',res);
      dispatch({
          type: FETCH_POSTS,
          payload: res.data
      })
  });
}

export const createPostAction = (newPost) => dispatch =>{
  console.log('post actions',newPost);
  axios.post('http://localhost:3000/queries', newPost).then(res=>{
    dispatch({
      type: NEW_POST,
      payload: res.data
    })
  });
}


