import gsap from "gsap"
import { useGSAP } from '@gsap/react';


export default function About() {

    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            gsap.from(".about-us", { 
                scale: 0.5, 
                opacity: 0,
                duration: .5
            });
            gsap.from(".desc", { 
                opacity: 0, 
                duration: 1,
                delay: 1
            });
            gsap.from(".co-sign p", { 
                opacity: 0 ,
                duration: .5,
                delay: 1.2
            });
            gsap.from(".companies img", {
                opacity: 0,
                duration: .5,
                scale: .2,
                ease: "back",
                stagger: .2,
                delay: 1.5
            });
            const tl = gsap.timeline();
            tl.from(".stats", {
                opacity: 0,
                duration: 1,
                delay: 2
            });
            tl.from(".stat h2", {
                opacity: 0,
                duration: .5,
                scale: 1.2,
                stagger: .5
            })
            .from(".stat p", {
                opacity: 0,
                duration: .5,
            })
        }
    )

    return (
        <div className="about" id="about" style={{backgroundImage: `url("static/images/notexture-bg.jpg")`}}>
            <div className="about-text">
                <h2 className="about-us">About Us</h2>
                <div className="desc">
                    <p>
                        At AlignAI, we are driven by a mission to revolutionize business operations through cutting-edge artificial intelligence solutions. Our expertise lies in creating tailored Revenue Operations (RevOps) tools that help businesses streamline workflows, optimize decision-making, and scale efficiently in today’s competitive landscape.
                        <br /><br />
                        At the core of our approach is collaboration. We don’t just deliver tools—we build partnerships, working hand-in-hand with businesses to ensure our solutions align perfectly with their unique needs. Whether you’re a startup looking to scale or an enterprise aiming to refine your processes, AlignAI is your trusted partner in transformation.
                        <br /><br />
                        Welcome to a smarter, more efficient way of doing business. Welcome to AlignAI.
                    </p>
                    <div className="co-sign">
                        <p>Trusted by the biggest companies</p>
                        <div className="companies">
                            <img src="static/images/google.png" alt="Google" className="google" />
                            <img src="static/images/meta.png" alt="Meta" className="meta" />
                            <img src="static/images/a.png" alt="Company A" className="a" />
                            <img src="static/images/nike.png" alt="Nike" className="nike" />
                            <img src="static/images/microsoft.png" alt="Microsoft" className="microsoft" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats">
                <div className="stat">
                    <h2>4+</h2>
                    <p>Years of experience</p>
                </div>
                <div className="stat">
                    <h2>65+</h2>
                    <p>Optimized projects</p>
                </div>
                <div className="stat">
                    <h2>30+</h2>
                    <p>Pleased partners globally</p>
                </div>
            </div>
        </div>
    );
}
