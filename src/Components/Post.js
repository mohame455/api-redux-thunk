import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getPostById } from "../js/action";

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const { post, comments } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getPostById(match.params.id));
    dispatch(getComments(match.params.id));
  }, [dispatch, match]);
  return (
    <div>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <h3>{comment.title}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
