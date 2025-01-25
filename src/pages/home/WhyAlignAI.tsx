import { Link } from "react-router";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyAlignAI(){
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".why-align",
                    start: "top 30%",
                    markers: false,
                }
            });

            tl.from(".why-align-title", {
                opacity: 0,
                duration: .5,
            });

            tl.from(".reason-to-choose", {
                opacity: 0,
                scale: 1.2,
                duration: .5,
                ease: "back",
                stagger: .5
            })
        })

    const reasons = [
        {   
            title: "proven results.",
            description: "Over 65 projects successfully optimized to drive efficiency and growth.",
            icon: "proven.png"
        },
        {
            title: "unmatched expertise.",
            description: "10+ years of experience in simplifying RevOps processes.",
            icon: "unmatched.png"
        },
        {
            title: "trusted partnerships.",
            description: "Collaborated with 30+ industry-leading organizations to revolutionize their workflows.",
            icon: "trusted-partners.png"
        },
        {
            title: "Seamless Integrations.",
            description: "This flexibility allows clients to work with their existing tools while enhancing overall productivity.",
            icon: "seemless.png"
        },
    ]

    const reasonsToChoose = reasons.map((reason) => {
        return (
            <div key={reason.title} className="reason-to-choose" >
                <div className="img-container">
                    <img src={`static/images/${reason.icon}`} alt={reason.title} />
                </div>
                <div className="reason-text">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="why-align" style={{backgroundImage: `url("static/images/background.png")`}}>
            <h3 className="why-align-title">Why Choose AlignAI?</h3>
            <div className="reasons-container">
                {reasonsToChoose}
            </div>

            {/* Book-A-Demo Button */}
            <Link to="/book-a-demo">
                    <button className="demo-btn">Book a Demo</button>
            </Link>
        </div>
    )
}