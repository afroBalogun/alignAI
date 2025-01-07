import Hero from "./Hero";


export default function LandingPage(){ 
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