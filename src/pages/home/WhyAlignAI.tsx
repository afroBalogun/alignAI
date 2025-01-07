export default function WhyAlignAI(){
    const reasons = [
        {
            title: "proven results.",
            description: "Over 65 projects successfully optimized to drive efficiency and growth.",
            icon: "proven.png"
        },
        {
            title: "unmatched expertise.",
            description: "10+ years of experience in simplifying RevOps processes.",
            icon: "unmatched.png"
        },
        {
            title: "trusted partnerships.",
            description: "Collaborated with 30+ industry-leading organizations to revolutionize their workflows.",
            icon: "trusted-partners.png"
        },
        {
            title: "Seamless Integrations.",
            description: "This flexibility allows clients to work with their existing tools while enhancing overall productivity.",
            icon: "seemless.png"
        },
    ]

    const reasonsToChoose = reasons.map((reason) => {
        return (
            <div key={reason.title} className="reason-to-choose" style={{backgroundImage: `url("static/images/background.png)`}}>
                <div className="img-container">
                    <img src={`static/images/${reason.icon}`} alt={reason.title} />
                </div>
                <div className="reason-text">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="why-align">
            <h3>Why Choose AlignAI?</h3>
            <div className="reasons-container">
                {reasonsToChoose}
            </div>
        </div>
    )
}