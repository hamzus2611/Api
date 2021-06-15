import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    
        <div className="card__container">
     
          <div className="card">
            <div className="card__content">
              <h3 className="card__header">{user.name}</h3>
              <p className="card__info">{user.email}</p>
              <p style={{ color: "white", textAlign: "left" }}>{user.username}</p>
              <p style={{ color: "white", textAlign: "left" }}>{user.email}</p>
              <p style={{ color: "white", textAlign: "left" }}>{user.phone}</p>
              <Link to={`/profile/${user.id}`}><Button variant="primary">View Details</Button></Link>
            </div>
          </div>
        </div>
   


  );
};

export default UserCard;
