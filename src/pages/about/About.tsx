import React from "react";

export default function About(){
    return(
        <div className="about" id="about">
            <div className="about-text">
                <h2 className="about-us">About Us</h2>
                <div className="desc">
                    <p className="">
                        At AlignAI, we are driven by a mission to revolutionize business operations through cutting-edge artificial intelligence solutions. Our expertise lies in creating tailored Revenue Operations (RevOps) tools that help businesses streamline workflows, optimize decision-making, and scale efficiently in today’s competitive landscape.
                        <br />

                        <br />
                        At the core of our approach is collaboration. We don’t just deliver tools—we build partnerships, working hand-in-hand with businesses to ensure our solutions align perfectly with their unique needs. Whether you’re a startup looking to scale or an enterprise aiming to refine your processes, AlignAI is your trusted partner in transformation.
                        <br />

                        <br />
                        Welcome to a smarter, more efficient way of doing business. Welcome to AlignAI.
                    </p>
                    <div className="co-sign">
                        <p>Trusted by biggest companies</p>
                        <div className="companies">
                            <img src="images/google.png" alt="google" className="google" />
                            <img src="images/meta.png" alt="meta" className="meta" />
                            <img src="images/a.png" alt="a" className="a" />
                            <img src="images/nike.png" alt="nike" className="nike" />
                            <img src="images/microsoft.png" alt="microsoft" className="microsoft" />
                        </div>
                    </div>
                </div>
                

            </div>

            
            <div className="stats">
                <div className="stat">
                    <h2>4+</h2>
                    <p>years of experience</p>
                </div>

                <div className="stat">
                    <h2>65+</h2>
                    <p>optimized project</p>
                </div>

                <div className="stat">
                    <h2>30+</h2>
                    <p>pleased partners globally</p>
                </div>            
            </div>
        </div>
    )
}