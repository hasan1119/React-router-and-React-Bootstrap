import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://picsum.photos/1363/560"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-primary">First slide label</h3>
            <p className="text-primary">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://picsum.photos/1363/560"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Second slide label</h3>
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://picsum.photos/1363/560"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Third slide label</h3>
            <p className="text-primary">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer></Footer>
    </div>
  );
};

export default Home;
