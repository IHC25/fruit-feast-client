import React from "react";
import { Card } from "react-bootstrap";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <Card className="bg-light text-dark">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay className="h-50 my-auto">
          <Card.Title>
            Welcome to <span className="text-primary">Fruit Feast Manager</span>
          </Card.Title>
          <Card.Text>
            This is a warehouse management web application for Fruit Feast Shop.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
