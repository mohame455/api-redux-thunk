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
  GET_COMMENTS_FAIL,
} from "../const/actionTypes";

const initialState = {
  isLoading: false,
  users: [],
  user: {},
  posts: [],
  comments: [],
  post: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, isLoading: true };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    case GET_ALL_USERS_FAIL:
      return { ...state, isLoading: false };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: state.users.find((user) => user.id.toString() === payload),
      };
    case GET_POSTS:
      return { ...state, isLoading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: payload };
    case GET_POSTS_FAIL:
      return { ...state, isLoading: false };
    case GET_POST_BY_ID:
      return {
        ...state,
        post: state.posts.find((post) => post.id.toString() === payload),
      };
    case GET_COMMENTS:
      return { ...state, isLoading: true };
    case GET_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, comments: payload };
    case GET_COMMENTS_FAIL:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default userReducer;
