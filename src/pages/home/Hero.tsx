import { Link } from "react-router";

export default function Hero(){

    const contacts = [
        {
            contact_name: "Ethan Maxwell",
            contact_img: "Ethan.png"
        },
        {
            contact_name: "Fatimah Blake",
            contact_img: "fatimah.png"
        },
        {
            contact_name: "Caleb Dawson",
            contact_img: "caleb.png"
        },
        {
            contact_name: "Maya Harper",
            contact_img: "maya.png"
        }
    ]

    const contact = contacts.map((contact) => {
        return(
            <div key={contact.contact_name} className="contact">
                 <div className="contact-name">{contact.contact_name}</div>
                 <img src={`images/${contact.contact_img}`} className="contact-img" alt={contact.contact_name}/>
            </div>
        )
    })
    return(
        <div className="hero">
            <h2>Streamlined Solutions for Your RevOps Workflow</h2>
            <p className="motto">Connect, analyze, and synchronize your business data effortlessly — all within one centralized platform.</p>
            
            <div className="hero-btn-container">
                <Link to="/sign-up"><button className="get-started-btn">Get Started</button></Link>

                <Link to="/book-a-demo"><button className="demo-btn">Book a demo</button></Link>
            </div>
            

            <div className="contact-bg">
                <div className="contact-ui">
                    <div className="search-tab">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <p>Show me a list of contacts that have signed in in the last 30 days</p>
                    </div>

                    <div className="contacts">
                        {contact}
                    </div>

                    <img src="images/alignAI-icon.png" alt="ui-image" className="ui-image" />
                </div>
            </div>

            <div className="in-container">
                <img src="images/IN.png" alt="in" className="in"/>
                <p className="connect ft">Connect</p>
                <p className="sync ft">Sync</p>
            </div>
        </div>
    )
}