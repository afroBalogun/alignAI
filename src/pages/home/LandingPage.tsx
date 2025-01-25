import Hero from "./Hero";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function LandingPage(){ 
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            gsap.from(
                ".left-intersect", {
                    opacity: 0,
                    yPercent: -100,
                    duration: 1,
                    delay: 1
                }
                
            )

            gsap.from(
                ".right-intersect", {
                    opacity: 0,
                    yPercent: 100,
                    duration: 1,
                    delay: 1
                }
                
            )

            gsap.from(
                ".l-eclipse", {
                    scrollTrigger: {
                        trigger: ".l-eclipse",
                        start: "top 30%",
                        markers: false,
                    },
                    opacity: 0,
                    xPercent: -100,
                    duration: .5,
                }
            )

            gsap.from(
                ".r-eclipse", {
                    scrollTrigger: {
                        trigger: ".l-eclipse",
                        start: "top 30%",
                        markers: false,
                    },
                    opacity: 0,
                    xPercent: 100,
                    duration: .5,
                }
            )
        })
    return (
        <div className="landing-page" style={{backgroundImage: `url("static/images/AI-home.jpg")`}}>
            <img src="static/images/left-intersect.png" alt="" className="left-intersect" />
            <img src="static/images/right-intersect.png" alt="" className="right-intersect" />
            <img src="static/images/l-eclipse.png" alt="eclipse" className="l-eclipse" />
            <img src="static/images/r-eclipses.png" alt="eclipse" className="r-eclipse" />

            <Hero/>
        </div>
    )
}