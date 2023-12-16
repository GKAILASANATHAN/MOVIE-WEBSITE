import { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";

const Carddetail = ({ cart, setCart }) => {
  const initialItemCount = cart.map((item) => item.quantity || 0);
  const [itemCount, setItemCount] = useState(initialItemCount);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    const newTotalAmount = itemCount.reduce(
      (total, quantity, index) => total + cart[index].ticketPrice * quantity,
      0
    );
    setTotalAmount(newTotalAmount);
  }, [itemCount, cart]);

  const incrementItem = (index) => {
    const newCounts = [...itemCount];
    newCounts[index]++;
    setItemCount(newCounts);

    const updatedCart = [...cart];
    updatedCart[index].quantity = newCounts[index];
    setCart(updatedCart);
  };

  const decrementItem = (index) => {
    if (itemCount[index] > 0) {
      const newCounts = [...itemCount];
      newCounts[index]--;
      setItemCount(newCounts);

      const updatedCart = [...cart];
      updatedCart[index].quantity = newCounts[index];
      setCart(updatedCart);

      setTotalAmount((prevTotal) => prevTotal - cart[index].ticketPrice);
    }
  };

  return (
    <>
      <h4 className="heading" style={{ textAlign: "center" }}>
        Almost there!
      </h4>
      {cart &&
        cart.map((movie, index) => (
          <div className="cart-box" key={movie.id}>
            <Card>
              <Row>
                <Col span={12}>
                  <img
                    className="detailimg"
                    src={movie.image}
                    alt="poster"
                    height="250rem"
                  />
                  <h3>{movie.budget}</h3>
                </Col>
                <Col>
                  <h4>{movie.title}</h4>
                  <h3>${movie.ticketPrice * itemCount[index]}</h3>
                  <button
                    className="button1"
                    onClick={() => decrementItem(index)}
                  >
                    -
                  </button>
                  <button className="button1">
                    Quantity: {itemCount[index]}
                  </button>
                  <button
                    className="button1"
                    onClick={() => incrementItem(index)}
                  >
                    +
                  </button>
                </Col>
              </Row>
            </Card>
          </div>
        ))}
      <div>
        <h3>Total Amount: ${totalAmount}</h3>
      </div>
    </>
  );
};

export default Carddetail;
