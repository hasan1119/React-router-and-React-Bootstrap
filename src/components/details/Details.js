import React, { useEffect, useState } from "react";
import { Card, Col, Button, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";

const Details = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data.meals[0]));
  }, [id]);
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col>
            <Card style={{}}>
              <div className="text-center w-100">
                <Card.Img variant="top" src={detail.strMealThumb} />
              </div>
              <Card.Body>
                <Card.Title>{detail.strMeal}</Card.Title>
                <Card.Text>{detail.strInstructions}</Card.Text>
                <Card.Text>{detail.strInstructions}</Card.Text>
                <a href={detail.strYoutube} variant="primary">
                  Go YouTube
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Details;
