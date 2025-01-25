import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useState } from "react"

export default function Stage(){

    gsap.registerPlugin(useGSAP, ScrollTrigger)

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".stages-container",
                    start: "top 30%",
                    markers: false,
                }
            });
            tl.from(".stages-container h2", {
                opacity: 0,
                duration: .5,
            })
            tl.from(".stages-container p", {
                opacity: 0,
                duration: .5,
            })
            tl.from(".desktop-stage", {
                opacity: 0,
                scale: 1.2,
                duration: .5,
                ease: "back",
                stagger: .5
            })
            gsap.from(".mobile-stage", {
                scrollTrigger: {
                    trigger: ".mobile-stage",
                    start: "-20% 30%",
                    markers: false,
                },
                opacity: 0,
                xPercent: -100,
                duration: .5,
                ease: "back",
                stagger: .5,
            })
        }
    )

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1180);
    
    const allStages = [
        {
            stage: "Startups",
            offer: "AlignAI helps startups streamline their revenue operations and scale efficiently. Startups can seamlessly align their processes, reduce overhead, and gain actionable insights to make smarter decisions faster. With cost-effective plans,AlignAI is tailored to support startup growth without compromising on functionality.",
            bgColor: "#111A39"
        },
        {
            stage: "Incubators",
            offer: "AlignAI provides incubators with a powerful solution to help their portfolio startups optimize and manage their RevOps workflows effectively. By integrating AlignAI into their ecosystem, incubators can ensure that startups maximize efficiency, collaboration, and decision-making to secure long-term success.",
            bgColor: "#02585D"
        },
        {
            stage: "Companies",
            offer: "For growing and enterprise-level companies, AlignAI simplifies complex revenue operations. Companies can connect fragmented tools, align departments (Sales, Marketing, Customer Success), and synchronize business data effortlessly. AlignAI’s robust platform supports integrations, team collaboration, and advanced analytics, helping companies stay ahead in a competitive landscape.",
            bgColor: "#038759"
        }
    ]

    const stages = allStages.map((stage) => {
        return(
            <div key={stage.stage} className={`stage ${isMobile ? " mobile-stage" : " desktop-stage"}`} >
                <h2 style={{backgroundColor: stage.bgColor}}>{stage.stage}</h2>
                <p style={{backgroundColor: stage.bgColor}}> {stage.offer}</p>
            </div>
        )
    })

    return(
        <div className="stages-container">
            <h2>Which Stage Are You</h2>
            <p>We offer business for all sizes and stages</p>
            <div className="stages">
                {stages}
            </div>
        </div>
    )
}