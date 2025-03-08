import React from "react";
import Service2 from 'D:/react/website/src/components/images/Service2.jpg';
import Service1 from 'D:/react/website/src/components/images/Service1.jpg';
import Service3 from 'D:/react/website/src/components/images/Service3.jpg';
import Sacan from 'D:/react/website/src/components/inc/Canvas.js';
import {Link}  from'react-router-dom';


function About() {
  return (
    
    
      <section className="section">
        <div className="card shadow ms-5 mt-3">
          <div className="card-body">
            <div className="heading text-sm-start text-capitalize fs-2 fw-bold text-danger mb-3">
              <p>About Us</p>
              <div className="under-line"></div>
            </div>
            <p className="fs-5 text-start ms-5 mt-2">
              At <strong>Mohana Travels</strong>, we believe that travel is more than just visiting new places—it’s about discovering yourself, experiencing different cultures, and creating unforgettable memories. Whether you’re seeking a relaxing getaway, an adventure-packed trip, or a deep cultural immersion, we’re here to make your travel dreams come true.
            </p>
         <div className="mt-5">  
          <div className="row">
          
            <div className="col-md-6 text-center" >
              
              <img src={Service1} className="w-50 h-50vh border-bottom" />
              <p ><b>INR 3000 Per Day</b></p>
              

            </div>
            <div className="col-md-6 bordeer-start" >
              <p className="mt-5 ml-0 fs-5 text-start ">At Mohana Travels, our Omni Van service is designed to provide a perfect balance of comfort, space, and reliability. Whether you're planning a family outing, corporate trip, or a group adventure, our Omni Van ensures that your journey is as enjoyable as your destination</p>
              <div className="text-end">
              
              <button class="btn btn-primary fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Book</button>

                      <div class="offcanvas offcanvas-end text-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                          <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>
                          <Sacan/>

              </div>
              
            </div>
            
          </div>
          
          <div className="row">
          
          <div className="col-md-6 text-center" >
            
            <img src={Service2} className="w-50 h-50vh  border-bottom" />
            <p ><b>INR 3000 Per Day</b></p>

          </div>
          <div className="col-md-6 bordeer-start" >
            <p className="mt-5 ml-0 fs-5 text-start ">At Mohana Travels, our Omni Van service is designed to provide a perfect balance of comfort, space, and reliability. Whether you're planning a family outing, corporate trip, or a group adventure, our Omni Van ensures that your journey is as enjoyable as your destination</p>
            <div className="text-end">
            <Link className="btn btn-primary fs-3">Book</Link>

            </div>
            
          </div>
          
        </div>
        <div className="row">
          
          <div className="col-md-6 text-center" >
            
            <img src={Service3} className="w-50 h-50vh  border-bottom" />
            <p ><b>INR 3000 Per Day</b></p>

          </div>
          <div className="col-md-6 bordeer-start" >
            <p className="mt-5 ml-0 fs-5 text-start ">At Mohana Travels, our Omni Van service is designed to provide a perfect balance of comfort, space, and reliability. Whether you're planning a family outing, corporate trip, or a group adventure, our Omni Van ensures that your journey is as enjoyable as your destination</p>
            <div className="text-end">
            <Link className="btn btn-primary fs-3">Book</Link>

            </div>
            
          </div>
          
        </div>
      </div> 
        

    </div>

    </div>

    </div>
        

      
    </section>
      
    
  );
}

export default About;
