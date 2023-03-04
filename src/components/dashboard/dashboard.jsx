import React from "react";
import "./dashboard.css"

export const Dashboard = () => {
    return (
        <>
            <div className="main_div">
                <div className="top_div">
                    <div className="text_div">
                        <h2>your creations</h2>
                    </div>
                    <div className="image_div">

                    </div>
                </div>
                <div className="bottom_div">
                    <div className="bottom_left">
                        <h2>My Cards</h2>
                    </div>
                    <div className="bottom_right">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}