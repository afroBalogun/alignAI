import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbar(){
    const navItems = [
        {
            navElement: "Home",
            link: "/"
        },
        {
            navElement: "About Us",
            link: "/about"
        },
        {
            navElement: "Pricing",
            link: "/pricing"
        },
        {
            navElement: "FAQ",
            link: "/faq"
        },
    ]

    const navMenu = navItems.map((navItem) => {
        return(
            <li>
                <NavLink to={navItem.link}
                >
                    {navItem.navElement}    
                </NavLink>
            </li>
        )
    })

    return(
        <nav >
            <div className="navbar">
                <a className="logo" href="#">
                    <img src="images/alignAI-icon.png" alt="Logo"/>
                    <h3>Align<span>AI</span></h3>
                </a>

                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                </ul>

                <div className="sl-btn">
                    <Link to="/sign-up">
                        <button className="sign-up">Sign up</button>
                    </Link>
                    <Link to="/login">
                        <button className="login">Login</button>
                    </Link>
                </div>
            </div>
            
        </nav>
    )
}