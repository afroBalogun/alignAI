import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BookADemo() {
    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".demo-container",
                    start: "top 80%",
                    markers: false,
                }
            });
            tl.from(".demo-content", {
                opacity: 0,
                duration: .5,
            });
            tl.from(".demo-form", {
                opacity: 0,
                duration: .5,
                scale: 1.2,
                ease: "back",
            });
        }
    );
    return (
        <div className="book-a-demo">
            <div className="demo-container">
                <div className="demo-content">
                    <h3>
                        Discover the Power of Align<span>AI</span>
                    </h3>
                    <p>
                        Book a live demo and see how AI-driven alignment can transform your workflow.
                    </p>
                    <ul>
                        <li>
                            <span>Streamlining resource</span> allocation with AI
                        </li>
                        <li>
                            <span>Smarter task alignment</span> for maximum efficiency
                        </li>
                        <li>
                            <span>Real-time insights</span> and actionable solutions
                        </li>
                    </ul>
                </div>

                <form className="demo-form">
                    <h4>Ready to Work Smarter?</h4>

                    <div className="demo-form-inputs">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email:" 
                            className="email" 
                            required 
                        />
                        <div className="checkbox">
                            <input 
                                type="checkbox" 
                                id="checkbox" 
                                className="checkbox-input" 
                                required 
                            />
                            <label htmlFor="checkbox">
                                I agree to the <span>privacy policy</span>, including AlignAI using my contact details for marketing purposes.
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="demo-submit-btn">
                        Schedule Your Free Demo Now
                    </button>
                </form>
            </div>
        </div>
    );
}
