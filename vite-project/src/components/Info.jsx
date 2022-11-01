import React from "react";
import '../App.css';
export default function Info(){
    return(
        <div className="Info">
            <img className="logo" src="https://cdn3.vectorstock.com/i/thumb-large/68/97/programmer-computer-expert-rgb-color-icon-vector-37206897.jpg" alt="" />
            <p className="name">Bernard Lewis Cardona</p>
            <p className="position">Full Stack Developer</p>
            <p className="email">bernardlewis.website</p>
            <div className="buttons">
                <button className="buttons--email"><i class="fa-solid fa-envelope"></i> <span>Email </span> </button>
                <button className="buttons--linkedin"><i class="fa-brands fa-linkedin"></i> <span>LinkedIn </span> </button>
            </div>
        </div>
    )
}