import React from "react";
import "./login.css"

export const Login = () => {
    return (
        <>
            <div className="login_main_div">
                <div className="login_container">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label input_lable">Email address</label>
                            <input type="email" className="form-control lable_input" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label input_lable">Password</label>
                            <input type="password" className="form-control lable_input" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="submit_btn">login</button>
                        <div className="signup_div">
                            <button className="signup_btn">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}