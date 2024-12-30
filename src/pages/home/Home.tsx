import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import WhyAlignAI from "./WhyAlignAI";
import Stage from "./Stage";
import Reviews from "./Reviews";
import Footer from "../../components/Footer";

export default function Home(){
    return(
        <div className="home">
            <img src="images/left-intersect.png" alt="" className="left-intersect" />
            <img src="images/right-intersect.png" alt="" className="right-intersect" />
            <img src="images/eclipses.png" alt="eclipse" className="l-eclipse" />
            <img src="images/r-eclipses.png" alt="eclipse" className="r-eclipse" />

            <Hero/>
            
            <div className="trusted">
                <p>Trusted by the biggest companies</p>
                <div className="trusted-companies">
                    <img src="images/google.png" alt="google" />
                    <img src="images/meta.png" alt="meta" />
                    <img src="images/a.png" alt="a" />
                    <img src="images/cisco.png" alt="cisco" />
                    <img src="images/microsoft.png" alt="microsoft" />
                </div>
            </div>

            <WhyAlignAI/>
            <Stage/>
            <Reviews/>
            <Footer/>
        </div>
    )
}