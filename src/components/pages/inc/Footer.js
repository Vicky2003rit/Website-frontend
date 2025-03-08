import React from "react";
import Service2 from 'D:/react/website/src/components/images/Service2.jpg';
import Service1 from 'D:/react/website/src/components/images/Service1.jpg';
import Service3 from 'D:/react/website/src/components/images/Service3.jpg';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="under-line mx-auto"></div>
              
              
            </div>
            <div className="col-md-4 ">
                <div className="card shadow">
                  
                  <div className="card-body color-red  text-center">
                    <img src={Service2} className="w-100 h-50vh border-bottom" alt="Services"/>
                    <div className="">
                    <p ><b>INR 3000 Per Day</b></p>
                    <div className="under-line mx-auto"></div>

                    </div>
                    
                    
                    
                    
                    
                  </div>
                  <div>
                  <Link className="btn btn-link" to="/about"> read more</Link>
                  </div>

                  
                  
                </div>
                <div>
                
                </div>
                
                
              

           </div>
           <div className="col-md-4 ">
                <div className="card shadow ">
                  
                  <div className="card-body text-center">
                    <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                    <p ><b>INR 3000 Per Day</b></p>
                    <div className="under-line mx-auto"></div>
                    
                  </div>
                  <div >
                  <Link className="btn btn-link " to="/about"> read more</Link>
                  </div>
                  
                </div>
                
                
              

           </div>
           <div className="col-md-4 ">
                <div className="card shadow">
                  
                  <div className="card-body text-center ">
                    <img src={Service3} className="w-100 h-50vh border-bottom " alt="Services"/>
                    
                    <p ><b>INR 3000 Per Day</b></p>
                    <div className="under-line mx-auto"></div>
                  </div>
                  <div className="text-justify">
                  <Link className="btn btn-link " to="/about"> read more</Link> 

                  </div>
                
                </div>
               
                
              

           </div>
             
            
          </div>
        </div>
      </section>
    );
}

export default Footer;