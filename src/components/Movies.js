import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movies() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://apigenerator.dronahq.com/api/AYw19b6g/data")
      .then((response) => response.json())
      .then((res) => setList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        {list.map((movie) => (
          <Col md={4} lg={6} sm={12} key={movie.id} className="card">
            <Link to={`/movies/${movie.id}`}>
              <Card className="card1">
                <img
                  src={movie.image}
                  alt={movie.name}
                  style={{
                    height: "300px",
                    width: "300px",
                    alignItems: "center",
                  }}
                />
                <p>
                  <strong>Release Date:</strong> {movie.releasedate}
                </p>
                <p>
                  <strong>Director:</strong> {movie.director}
                </p>
                <p>
                  <strong>Budget:</strong> {movie.budget}
                </p>
                <p>
                  <strong>Ticket Price:</strong> {movie.ticketPrice}
                </p>
                <Button className="button">VIEW MORE</Button>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Movies;
