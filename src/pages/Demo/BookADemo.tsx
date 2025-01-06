export default function BookADemo(){
    return(
        <div className="book-a-demo">
            <div className="demo-container">
                <div className="demo-content">
                    <h3>Discover the Power of Align<span>Ai</span></h3>
                    <p>Book a live demo and see how AI-driven alignment can transform your workflow</p>
                    <ul>
                        <li><span>Streamlining resource</span> allocation with AI</li>
                        <li><span>Smarter task alignment</span> for maximum efficiency</li>
                        <li><span>Real-time insights</span> and actionable solutions</li>
                    </ul>
                </div>

                <form className="demo-form">
                    <h4>Ready to Work Smarter?</h4>

                    <div className="demo-form-inputs">
                        <input type="email" name="email" placeholder="Email:" className="email"/>
                        <div className="checkbox">
                            <label htmlFor="checkbox">I agree to the <span>privacy policy</span> including to AlignAI using my contacts details to contact me for marketing purposes.</label>
                            <input type="checkbox"  placeholder="checkbox"/>
                        </div>
                    </div>

                    <button type="submit" className="demo-submit-btn">Schedule Your Free Demo Now</button>
                </form>
            </div>
        </div>
    )
}