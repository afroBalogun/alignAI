import WhyAlignAI from "./WhyAlignAI";
import Stage from "./Stage";
import Reviews from "./Reviews";
import Footer from "../../components/Footer";
import LandingPage from "./LandingPage";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home(){
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(
        () => {
            gsap.from(
                ".trusted p", {
                    scrollTrigger: {
                        trigger: ".in-container",
                        start: "top 30%",
                        markers: false,
                    },
                    opacity: 0,
                    duration: .5,
                }
            )
            gsap.from(
                ".trusted-companies", {
                    scrollTrigger: {
                        trigger: ".in-container",
                        start: "20% 30%",
                        markers: false,
                    },
                    opacity: 0,
                    scale: 1.2,
                    duration: .5,
                    ease: "back",
                }
            )

        })
    return(
        <div className="home">
            <LandingPage/>
            
            <div className="trusted">
                <p>Trusted by the biggest companies</p>
                <div className="trusted-companies">
                    <img src="static/images/google.png" alt="google" />
                    <img src="static/images/meta.png" alt="meta" />
                    <img src="static/images/a.png" alt="a" />
                    <img src="static/images/cisco.png" alt="cisco" />
                    <img src="static/images/microsoft.png" alt="microsoft" />
                </div>
            </div>

            <WhyAlignAI/>
            <Stage/>
            <Reviews/>
            <Footer/>
        </div>
    )
}