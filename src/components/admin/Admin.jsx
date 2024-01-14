import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Admin Panel</h2>
              <hr className="my-4" />
              <div className="d-grid gap-3">
                <Link to={"/existing-rooms"} className="btn btn-primary">
                  Gestion des chambres
                </Link>
                <Link to={"/existing-bookings"} className="btn btn-success">
                  Gestion des réservations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;


