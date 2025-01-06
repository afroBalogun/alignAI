import  { useState } from "react";
import { questions } from "../../assets/questions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
    const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({0: true});
    const [questionCategory, setQuestionCategory] = useState("general");

    function selectCategory(id: string) {
        setQuestionCategory(id);
    }

    function toggleAnswer(index: number) {
        setShowAnswers((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    }

    const filteredQuestions = questions.filter(
        (question) => question.category === questionCategory
    );

    const displayedQuestions = filteredQuestions.map((question, index) => {
        return (
            <div key={index} className="faq-item">
                <div className="question">
                    <h4>{question.question}</h4>
                    {showAnswers[index] ? (
                        <IoIosArrowUp className="arrow" onClick={() => toggleAnswer(index)} />
                    ) : (
                        <IoIosArrowDown className="arrow" onClick={() => toggleAnswer(index)} />
                    )}
                </div>
                {showAnswers[index] && (
                    <div className="answer">
                        <p>{question.answer}</p>
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className="faq" id="faq">
            <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Most commonly questions asked about AlignAI. <br />
                    Can’t find what you’re looking for? Chat with our team!
                </p>
            </div>

            <div className="categories">
                <button
                    className={`category ${questionCategory === "general" ? "active" : ""}`}
                    onClick={() => selectCategory("general")}
                >
                    General
                </button>
                <button
                    className={`category ${questionCategory === "pricing" ? "active" : ""}`}
                    onClick={() => selectCategory("pricing")}
                >
                    Pricing
                </button>
                <button
                    className={`category ${questionCategory === "dashboard" ? "active" : ""}`}
                    onClick={() => selectCategory("dashboard")}
                >
                    Dashboard
                </button>
            </div>

            <div className="QA">{displayedQuestions}</div>
        </div>
    );
}
