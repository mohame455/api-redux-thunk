import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, getUserById } from "../js/action";
import User from "./User";

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const { user, posts, isLoading } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getUserById(match.params.id));
    dispatch(getPosts(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <User user={user} isProfile={true} />
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        posts.map((post,index) => (
          <div key={index} >
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
