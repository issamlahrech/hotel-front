import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import Header from "./Header";
import {
  FaClock,
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi
} from "react-icons/fa";

const HotelService = () => {
  const services = [
    {
      icon: <FaWifi className="text-primary" />,
      title: "WiFi",
      description: "Restez connecté avec un accès Internet haut débit."
    },
    {
      icon: <FaUtensils className="text-danger" />,
      title: "Petit-déjeuner",
      description: "Commencez votre journée avec un délicieux petit-déjeuner buffet."
    },
    {
      icon: <FaTshirt className="text-success" />,
      title: "Blanchisserie",
      description: "Gardez vos vêtements propres et frais avec notre service de blanchisserie."
    },
    {
      icon: <FaCocktail className="text-warning" />,
      title: "Mini-bar",
      description: "Profitez d'une boisson rafraîchissante ou d'une collation de notre mini-bar en chambre."
    },
    {
      icon: <FaParking className="text-info" />,
      title: "Parking",
      description: "Garez votre voiture commodément dans notre parking sur place."
    },
    {
      icon: <FaSnowflake className="text-secondary" />,
      title: "Climatisation",
      description: "Restez au frais et confortable avec notre système de climatisation."
    }
  ];

   const servicesRows = [];
  for (let i = 0; i < services.length; i += 3) {
    servicesRows.push(
      <Carousel.Item key={i}>
        <Row className="justify-content-center">
          {services.slice(i, i + 3).map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="service-card text-center hotel-color-bg">
                <div className="service-icon">{service.icon}</div>
                <Card.Body>
                  <Card.Title className="hotel-color">
                    {service.title}
                  </Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
    <>
      <div className="mb-5 text-center">
    <h3 className="font-weight-bold">Nos services</h3>


        <Carousel
          nextLabel={<span className="custom-carousel-arrow">›</span>}
          prevLabel={<span className="custom-carousel-arrow">‹</span>}
        >
          {servicesRows}
        </Carousel>
      </div>
      <hr />
    </>
  );
};

export default HotelService;
