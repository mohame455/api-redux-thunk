import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ user, isProfile = false }) => {
  return (
    <div className="col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <span className="avatar">{user && user.name && user.name[0]}</span>
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{`@${user.username}`}</Card.Text>
          <Card.Text>{user && user.address && user.address.city}</Card.Text>
          <Link to={isProfile ? "/" : `/profile/${user.id}`}>
            <Button variant="primary">
              {isProfile ? "Go back" : "Go to Profile"}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
