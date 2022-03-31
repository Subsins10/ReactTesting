import { FETCH_POSTS, NEW_POST } from "../Actions/types";

const initialState= {
    items : []
}

export const fetchPostsReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_POSTS: 
        console.log("get reducers",action);
        return{
            items:action.payload
        }
        case NEW_POST: 
        console.log("post reducers",action);
        return{
            items:[...state.items, action.payload]
        }
        default: return state;
    }
}
