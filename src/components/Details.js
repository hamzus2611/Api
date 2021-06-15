
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then(res => {
        setUser(res.data);
        setLoading(false)

      })
      .catch(err => console.log(err))
  }, [match]);
  if (loading) {
    return (
      <Spinner animation="border" variant="dark" />
    )
  }

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

export default Details;
