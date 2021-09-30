import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          {foods.map((food) => (
            <Food singleFood={food} key={food.idMeal} />
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

function Food({ singleFood }) {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card style={{ margin: "15px auto", width: "300px" }}>
        <Card.Img variant="top" src={singleFood.strMealThumb} />
        <Card.Body>
          <Card.Title>{singleFood.strMeal}</Card.Title>
          <Card.Text> {singleFood.strInstructions.slice(0, 50)} </Card.Text>
          <NavLink
            to={`/foods/${singleFood.idMeal}`}
            className="btn btn-primary w-100"
          >
            Show Details
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Foods;
