import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from "./inc/VMC";

import Footer from "./inc/Footer";
function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Mohana Travels</h3>
              <div className="under-line mx-auto"></div>
              <p>
              travelling can be a fun and learning experience for everyone now. Moreover, with technology, you can travel to any corner of the world without having to worry about barriers of language, distance, and more. Everyone must travel at least once in their life to enjoy an unforgettable experience.
              </p>
              <Link to="/about" className="btn btn-warning shadow">ReadMore</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our visionn,mission and values*/}
      <Vmc/>
      {/*Our Services*/}
      <Footer/>
      
    </div>
  );
}

export default Home;
