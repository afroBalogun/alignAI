import WhyAlignAI from "./WhyAlignAI";
import Stage from "./Stage";
import Reviews from "./Reviews";
import Footer from "../../components/Footer";
import LandingPage from "./LandingPage";

export default function Home(){
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