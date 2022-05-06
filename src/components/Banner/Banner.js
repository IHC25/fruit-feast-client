import React from "react";
import { Card } from "react-bootstrap";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="mb-4">
      <Card className="bg-light text-dark">
        <Card.Img height={400} src={banner} alt="Card image" />
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
