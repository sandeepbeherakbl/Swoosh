import React from "react";
import "./registration.css"

export const Registration = () => {
    return (
        <>
            <div className="login_main_div">
                <div className="login_container">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label input_lable">Name</label>
                            <input type="email" className="form-control lable_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label input_lable">Email</label>
                            <input type="password" className="form-control lable_input" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label input_lable">Password</label>
                            <input type="password" className="form-control lable_input" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="submit_btn">SIGN UP</button>
                        <div className="signup_div">
                            <button className="signup_btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}