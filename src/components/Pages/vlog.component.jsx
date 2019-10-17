import React, { Component } from "react";

class Gang extends Component {
  render() {
    return (
      <div>
        <section className="page-header artist-banner">
          <div className="tim-container">
            <div className="page-header-title text-center">
              <h2>Events</h2>
            </div>

            <div className="breadcrumbs">
              <Link to="/index">Home</Link>
              <span>/</span>
              <span>Events</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Gang;
