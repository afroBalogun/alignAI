import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function Pricing() {
    const [monthly, setMonthly] = useState(true);

    const plans = [
        {
            plan: "free",
            monthlyPrice: "0",
            quarterlyPrice: "0",
            features: [
                "Access to basic RevOps tools.",
                "1,000 monthly contact records.",
                "50 monthly contact records.",
                "Limited customer support.",
                "Perfect for startups or individuals just beginning their RevOps journey."
            ]
        },
        {
            plan: "pro",
            monthlyPrice: "29",
            quarterlyPrice: "78.30",
            features: [
                "Everything in the Free Plan.",
                "Data synchronization for up to 5 tools.",
                "1,000 monthly contact records.",
                "Advanced analytics and reporting.",
                "Priority customer support.",
                "Ideal for small to mid-sized businesses looking to optimize their workflows."
            ]
        },
        {
            plan: "premium",
            monthlyPrice: "99",
            quarterlyPrice: "267.30",
            features: [
                "Everything in the Pro Plan.",
                "Unlimited data synchronization.",
                "10,000+ monthly contact records.",
                "Team collaboration tools.",
                "Custom integrations and onboarding support.",
                "Best suited for enterprises requiring a comprehensive and scalable solution."
            ]
        }
    ];

    const availablePlans = plans.map((plan, index) => (
        <div className="plan-container" key={index}>
            <p className="plan">{plan.plan}</p>
            {monthly ? (
                plan.monthlyPrice === "0" ? (
                    <h4 className="price">${plan.monthlyPrice}</h4>
                ) : (
                    <h4 className="price">
                        ${plan.monthlyPrice}/<span>month</span>
                    </h4>
                )
            ) : (
                plan.quarterlyPrice === "0" ? (
                    <h4 className="price">${plan.quarterlyPrice}</h4>
                ) : (
                    <h4 className="price">
                        ${plan.quarterlyPrice}/<span>quarter</span>
                    </h4>
                )
            )}
            <div className="plan-features">
                {plan.features.map((feature, idx) => (
                    <div className="feature">
                        <FaCheck />
                        <p key={idx}>
                            {feature}
                        </p>
                    </div>                   
                ))}
            </div>

            <div className="get-started-btn">
                <button>Get stated</button>
            </div>  
        </div>
    ));

    return (
        <div className="pricing" id="pricing">
            <h2 className="plans-header">Choose your Right Plan!</h2>
            <p className="plans-text">Unlock endless possibilities</p>

            <div className="plan-btn-container">
                <pre
                    className="plan-btn blank"
                    style={{
                        transform: monthly ? "translateX(0)" : "translateX(110%)"
                    }}> </pre>
                <button
                    className={`plan-btn ${monthly ? "active" : "inactive"}`}
                    onClick={() => setMonthly(true)}
                >
                    Monthly
                </button>
                <button
                    className={`plan-btn ${!monthly ? "active" : "inactive"}`}
                    onClick={() => setMonthly(false)}
                >
                    Quarterly (save 10%)
                </button>
            </div>

            <div className="available-plans">{availablePlans}</div>
        </div>
    );
}
