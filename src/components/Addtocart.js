import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Addtocart = ({ handleClick, setCart }) => {
  const [cinema, setCinema] = useState({});
  const { dataId } = useParams();

  useEffect(() => {
    fetch(`https://apigenerator.dronahq.com/api/AYw19b6g/data/${dataId}`)
      .then((res) => res.json())
      .then((res) => {
        setCinema(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataId]);

  const handleTicketBooking = () => {
    alert("Ticket booking successfully.");
  };
  return (
    <Container>
      <Row>
        <Col
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1
              style={{
                textAlign: "center",
                color: "darkblue",
                fontFamily: "revert",
              }}
            >
              <u>ABOUT DETAILS</u>
            </h1>
            <h1 className="movienamecolor">Movie name : {cinema.title}</h1>
            <img
              className="image1"
              src={cinema.image}
              alt="image1"
              style={{
                alignItems: "center",
                height: "300px",
                width: "300px",
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4 style={{ marginBottom: "20px" }}>
            {cinema.description || "No description available"}
          </h4>
          <div className="button2">
            <button className="addcart" onClick={() => handleClick(cinema)}>
              <strong>ADD CART</strong>
            </button>
            <button className="ticketbook" onClick={handleTicketBooking}>
              <strong>TICKETBOOKING</strong>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Addtocart;
