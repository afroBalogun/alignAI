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