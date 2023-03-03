import React from "react";
import "./option.css"

export const Option = () => {
    return (
        <>
            <div className="option_maindiv">
                <div className="option_container">
                    <div className="card">
                        <p>BUSINESS</p>
                        <button> + </button>
                    </div>
                    <div className="card">
                        <p>PERSONAL</p>
                        <button> + </button>
                    </div>
                    <div className="card">
                        <p>EMPLOYEMENT</p>
                        <button> + </button>
                    </div>
                    <div className="card">
                        <p>ACADEMICS</p>
                        <button> + </button>
                    </div>
                    <div className="card">
                        <p>OTHERS</p>
                        <button> + </button>
                    </div>
                </div>
            </div>
        </>
    )
}