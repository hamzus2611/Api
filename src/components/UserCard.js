import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="container">
    <div className="card__container">
      <div className="card">
        <div className="card__content">
          <h3 className="card__header">{user.name}</h3>
          <p className="card__info">{user.email}</p>
          <p>{user.phone}</p>
          <Link to="/"> <Button variant="primary">Go Back</Button></Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UserCard;
