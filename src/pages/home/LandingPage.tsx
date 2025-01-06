import Hero from "./Hero";


export default function LandingPage(){ 
    return (
        <div className="landing-page">
            <img src="images/left-intersect.png" alt="" className="left-intersect" />
            <img src="images/right-intersect.png" alt="" className="right-intersect" />
            <img src="images/l-eclipse.png" alt="eclipse" className="l-eclipse" />
            <img src="images/r-eclipses.png" alt="eclipse" className="r-eclipse" />

            <Hero/>
        </div>
    )
}