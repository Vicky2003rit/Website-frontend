import React from "react";
function Contact(){
    return(
        <section className="section">
          <div className="container">
              <div className="card shadow">
                <div className="card-body"> 
                  <div className="row">
                    <div className="col-md-6 ">
                      <h6>Contact Form</h6>
                      <hr />
                      <div className="form-group">
                        <label for="" className="mb-1">Full Name</label>
                        <input type="text"className="form-control"   placeholder="Enter Full Name"></input>

                      </div>

                      <div className="form-group">
                        <label for="" className="mb-1">Phone Number</label>
                        <input type="text"className="form-control"   placeholder="Mobile Number"></input>

                      </div>
                      <div className="form-group">
                        <label for="" className="mb-1">Email</label>
                        <input type="text"className="form-control"   placeholder="Email"></input>

                      </div>
                      <div className="form-group">
                        <label for="" className="mb-1">Full Name</label>
                       
                        <textarea rows="3" className="form-control"  placeholder="Type your message" ></textarea>

                      </div>
                      <div className="form-group">
                        
                        <button type="button" className="btn btn-primary shadow w-100 mt-2 p-3 ">Send Message</button>

                      </div>
                    </div>
                    <div className="col-md-6 border-start">
                      <h5 className="main-heading">Address</h5>
                      <div className="under-line"></div>
                      <p>
                        Gokul Street, Vadapalani,Chennai
                      </p>
                      <p>
                        phone :+91 7896547852
                      </p>
                      <p>
                        Email :travel@gmail.com
                      </p>
                      
                    
                    </div>


                  </div>

                </div>

              </div>

          </div>
        </section>
      
      
    

    );
}


export default Contact;