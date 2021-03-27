import axios from "axios";
import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_USER_BY_ID,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_BY_ID,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL
} from "../const/actionTypes";

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_USERS,
  });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
    });
  }
};

export const getUserById = (id) => async (dispatch) => {
  dispatch({
    type: GET_USER_BY_ID,
    payload: id,
  });
};

export const getPosts = (userId) => async (dispatch) => {
  dispatch({
    type: GET_POSTS,
  });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
      dispatch({
          type:GET_POSTS_FAIL
      })
  }
};

export const getPostById=(postId)=>async dispatch=>{
    dispatch({
        type:GET_POST_BY_ID,
        payload:postId
    })
}

export const getComments=(postId)=>async dispatch=>{
    dispatch({
        type:GET_COMMENTS,
    })
    try {
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+postId)
        dispatch({
            type:GET_COMMENTS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:GET_COMMENTS_FAIL
        })
    }

}
