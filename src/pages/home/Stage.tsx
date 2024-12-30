import React from "react";

export default function Stage(){
    const allStages = [
        {
            stage: "Startups",
            offer: "AlignAI helps startups streamline their revenue operations and scale efficiently. Startups can seamlessly align their processes, reduce overhead, and gain actionable insights to make smarter decisions faster. With cost-effective plans,AlignAI is tailored to support startup growth without compromising on functionality.",
            bgColor: "#111A39"
        },
        {
            stage: "Incubators",
            offer: "AlignAI provides incubators with a powerful solution to help their portfolio startups optimize and manage their RevOps workflows effectively. By integrating AlignAI into their ecosystem, incubators can ensure that startups maximize efficiency, collaboration, and decision-making to secure long-term success.",
            bgColor: "#02585D"
        },
        {
            stage: "Companies",
            offer: "For growing and enterprise-level companies, AlignAI simplifies complex revenue operations. Companies can connect fragmented tools, align departments (Sales, Marketing, Customer Success), and synchronize business data effortlessly. AlignAI’s robust platform supports integrations, team collaboration, and advanced analytics, helping companies stay ahead in a competitive landscape.",
            bgColor: "#038759"
        }
    ]

    const stages = allStages.map((stage) => {
        return(
            <div key={stage.stage} className="stage" >
                <h2 style={{backgroundColor: stage.bgColor}}>{stage.stage}</h2>
                <p style={{backgroundColor: stage.bgColor}}> {stage.offer}</p>
            </div>
        )
    })

    return(
        <div className="stages-container">
            <h2>Which Stage Are You</h2>
            <p>We offer business for all sizes and stages</p>
            <div className="stages">
                {stages}
            </div>
        </div>
    )
}