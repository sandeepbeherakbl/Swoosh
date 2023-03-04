import React from "react";
import "./form.css";


export const Form = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                
            </div>
            <div className="col-md-7">

                <div className="row">
                    <div className="col-md-6">
                        <div>
                        <img src="src\images\user-img.png" className="form-usr-img"/>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start align-items-center">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                     <label for="exampleFormControlInput1" className="form-label formtxt">Name</label>

                    <input type="name" class="form-control custom-txtfield" id="exampleFormControlInput1" placeholder="Name"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label formtxt">Contact</label>
                    <input type="contact" class="form-control custom-txtfield" id="exampleFormControlInput1" placeholder="Contact"/>
                </div>

                <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label formtxt">Address</label>
                    <input type="address" class="form-control custom-txtfield" id="exampleFormControlInput1" placeholder="Address"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label formtxt">Designation</label>
                    <input type="designation" class="form-control custom-txtfield" id="exampleFormControlInput1" placeholder="Designation"/>
                </div>

                <div class="mb-3">
                     <label for="exampleFormControlInput1" className="form-label formtxt">Email</label>
                    <input type="email" class="form-control custom-txtfield" id="exampleFormControlInput1" placeholder="Email"/>
                </div>
            </div>

            <div className="col-md-2">
                <div>
                   <button type="button" class="btn custom-formbtn">Choose Template</button>
                </div>
            </div>
        </div>
      </div>
      
    </>
  );
};
