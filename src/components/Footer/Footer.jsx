import React from "react";
import "./footer.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export const BottomNav = () => {
    return (
        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <h4>Feedback</h4>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                            <button className="submit-btn">submit</button>
                        </div>

                        <div className="col">
                            <div className="list-main-container">
                                <div className="list-main-first">
                                    <ui className="list-unstyled">
                                        <li>DANK MEMES</li>
                                        <li>OTHER STUFF</li>
                                        <li>GUD STUFF</li>
                                    </ui>
                                </div>

                                <div className="list-main-second">
                                    <ui className="list-unstyled">
                                        <li>DANK MEMES</li>
                                        <li>OTHER STUFF</li>
                                        <li>GUD STUFF</li>
                                    </ui>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="footer-social">
    
                        <div className="footer-social--icons">
                            <div className="social-icons-inner">
                                <FaFacebook className="icons" />
                            </div>
                            <div className="social-icons-inner">
                                <FaLinkedin className="icons" />
                            </div>
                        </ div>
                    </div>

                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Connect 360 | All rights reserved |
                            Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};




