import React from "react";
import "./home.css";
import Background from '../../images/background.svg';
import image1 from '../../images/img1.svg';
import image2 from '../../images/img2.svg';
import image3 from '../../images/img3.svg';
import image4 from '../../images/img4.svg';

export const Home = () => {
  return (
    <>
      <div className="container-fluid p-md-0">
        <div className="row">
            <div className="col-md-6 ps-5 my-auto">
                <div>
                    <p className="img-bg-headtxt">Build a job-winning resume for free</p>
                    <p className="img-bg-subtxt">Set yourself apart with a modern resume. Expert tips, customizable templates & quick PDF download included.</p>
                </div>

                <div className="box-outer my-5 mt-5">
                    <p className="ps-4"><img className="img-arrow" src="src\images\right-arrow-img.png"/> <span className="ps-2">ggsgdhcbhsbh hgdschcshcghschcs</span></p>
                    <p className="ps-4"><img className="img-arrow" src="src\images\right-arrow-img.png"/> <span className="ps-2">ggsgdhcbhsbh hgdschcshcghschcs</span></p>
                    <p className="ps-4"><img className="img-arrow" src="src\images\right-arrow-img.png"/> <span className="ps-2">ggsgdhcbhsbh hgdschcshcghschcs</span></p>
                </div>
            </div>
            <div className="col-md-6">
                 <img className="w-100" src={Background} alt="React Logo" />
            </div>
        </div>

        <section>
            <div className="container">
                <div className="row mb-5">
                    <p className="custom-body-header-txt text-center"> Dummy Text</p>
                    <p className="custom-body-sub-txt text-center">Dummy Subtext</p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="service-card">
                        <div className="service-card">
                            <div className="card">
                                <i className="fab fa-codepen"></i>
                                
                            </div>

                        </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service-card">
                            <div className="card">
                                <i className="fab fa-codepen"></i>
                                
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service-card">
                            <div className="card">
                                <i className="fab fa-codepen"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section>
            <div className="container">
            <div className="row my-4 mt-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="">
                    <div>
                        <p className="img-bg-headtxt">Build a job-winning resume for free</p>
                        <p className="img-bg-subtxt">Set yourself apart with a modern resume. Expert tips, customizable templates & quick PDF download included.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6">

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-around">
                       <img className="w-50 img-card mb-3" src={image1} alt="React Logo" />
                    </div>
                    <div className="col-md-6">
                      <img className="w-100 mb-3" src={image2} alt="React Logo" />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-6">
                       <img className="w-100 mb-3" src={image3} alt="React Logo" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <img className="w-50 mb-3" src={image4} alt="React Logo" />
                    </div>
                </div>

            </div>
        </div>
                
            </div>
        </section>

        



        <section>
            <div className="container-fluid custom-card-bg">

            <div className="row custom-card-rwbg">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row card-inside-rwbg">
                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row card-inside-rwbg">
                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="carousel-item">

                        <div className="row card-inside-rwbg">
                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card card-outerline mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <img src="src/images/user-img.png" className="user-img"></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>

            </div>
        </section>

        
        
        

      </div>
    </>
  );
};
