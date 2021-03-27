import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../js/action";

import User from "./User";

const Users = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const { users, isLoading } = useSelector((state) => state.userReducer);
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className="row">
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
};

export default Users;
