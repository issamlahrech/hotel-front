import React from "react";
import { Container } from "react-bootstrap";

const Parallax = () => {
  return (
    <div className="parallax mb-5">
      <Container className="d-flex align-items-center justify-content-center px-5 py-5">
        <div className="animated-texts bounceIn text-center">
          <h1>
            Expérimentez la meilleure hospitalité à{" "}
            <span className="hotel-color">Mazagan Beach & Resort</span>
          </h1>
          <h3>Découvrez l'excellence de nos services pour satisfaire tous vos besoins.</h3>
        </div>
      </Container>
    </div>
  );
};

export default Parallax;

