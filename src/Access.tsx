import React from "react";
import { Link, Outlet } from "react-router";

export default function Access(){
    return(
        <div className="access">
            <Link className="logo" to="/">
                <img src="images/alignAI-icon.png" alt="Logo"/>
                <h3>Align<span>AI</span></h3>
            </Link>
            <Outlet/>
        </div>
    )
}