
import React,{ useEffect, useState } from 'react';



function Canvas(){
  
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Get YYYY-MM-DD format
    setTodayDate(formattedDate);
  }, [])
    return(
        

        
                                <div class="offcanvas-body">


                                <form class="row g-3 needs-validation" novalidate>
                                      <div class="col-md-12">
                                        <label for="validationCustom01" class="form-label">First name</label>
                                        <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
                                        <div class="valid-feedback">
                                          Looks good!
                                        </div>
                                      </div>
                                      
                                      <div class="col-md-12">
                                        <label for="validationCustomUsername" class="form-label">Username</label>
                                        <div class="input-group has-validation">
                                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                                          <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                                          <div class="invalid-feedback">
                                            Please choose a username.
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <label for="validationCustom03" class="form-label">City</label>
                                        <input type="text" class="form-control" id="validationCustom03" required/>
                                        <div class="invalid-feedback">
                                          Please provide a valid city.
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <label for="validationCustom04" class="form-label">State</label>
                                        {/* <input type="text" class="form-control" id="stateSearch" placeholder="Search for a state..." onkeyup="filterStates()" aria-label="Search"></input> */}
                                        <select class="form-select" id="validationCustom04" required>
                                          <option selected disabled value="">Choose...</option>
                                          <option value="AP">Andhra Pradesh</option>
                                          <option value="AR">Arunachal Pradesh</option>
                                          <option value="AS">Assam</option>
                                          <option value="BR">Bihar</option>
                                          <option value="CT">Chhattisgarh</option>
                                          <option value="GA">Goa</option>
                                          <option value="GJ">Gujarat</option>
                                          <option value="HR">Haryana</option>
                                          <option value="HP">Himachal Pradesh</option>
                                          <option value="JH">Jharkhand</option>
                                          <option value="KA">Karnataka</option>
                                          <option value="KL">Kerala</option>
                                          <option value="MP">Madhya Pradesh</option>
                                          <option value="MH">Maharashtra</option>
                                          <option value="MN">Manipur</option>
                                          <option value="ML">Meghalaya</option>
                                          <option value="MZ">Mizoram</option>
                                          <option value="NL">Nagaland</option>
                                          <option value="OR">Odisha</option>
                                          <option value="PB">Punjab</option>
                                          <option value="RJ">Rajasthan</option>
                                          <option value="SK">Sikkim</option>
                                          <option value="TN">Tamil Nadu</option>
                                          <option value="TG">Telangana</option>
                                          <option value="TR">Tripura</option>
                                          <option value="UP">Uttar Pradesh</option>
                                          <option value="UK">Uttarakhand</option>
                                          <option value="WB">West Bengal</option>
                                          <option value="AN">Andaman and Nicobar Islands</option>
                                          <option value="CH">Chandigarh</option>
                                          <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
                                          <option value="DL">Delhi</option>
                                          <option value="LD">Lakshadweep</option>
                                          <option value="PY">Puducherry</option>
                                        </select> 
                                        
                                        
                                        <div class="invalid-feedback">
                                          Please select a valid state.
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <label for="startDate" class="form-label">Start Date</label>
                                        <input type="date" class="form-control" id="startDate" min={todayDate} required/>
                                        <div class="invalid-feedback">
                                          Please provide a date
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <label for="etartDate" class="form-label">Start Date</label>
                                        <input type="date" class="form-control" id="startDate" min={todayDate} required/>
                                        <div class="invalid-feedback">
                                          Please provide a date
                                        </div>
                                      </div>
                                      
   
                                      <div class="col-12">
                                        <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                          <label class="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                          </label>
                                          <div class="invalid-feedback">
                                            You must agree before submitting.
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-12">
                                        <button class="btn btn-primary" type="submit">Submit form</button>
                                      </div>
                                    </form>
                                                                                            
                                </div>
                      

                      
    );
}

export default Canvas;