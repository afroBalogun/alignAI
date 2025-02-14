import { useState } from "react";
import { questions } from "../../assets/questions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Faq() {
    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.from(".faq-header h2", {
                opacity: 0,
                scale: 1.2,
                duration: .5,
            });
            tl.from(".faq-header p", {
                opacity: 0,
                duration: .5,
            });

            tl.from(".category", {
                opacity: 0,
                duration: .5,
                stagger: .2,
            });
            tl.from(".faq-item", {
                opacity: 0,
                xPercent: -20,
                duration: .5,
                stagger: .3,
            });
            tl.from(".answer", {
                opacity: 0,
                duration: .5,
            });
        }
    )

    const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({ 0: true });
    const [questionCategory, setQuestionCategory] = useState<string>("general");

    const selectCategory = (category: string) => setQuestionCategory(category);

    const toggleAnswer = (index: number) => {
        setShowAnswers((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const filteredQuestions = questions.filter(
        (question) => question.category === questionCategory
    );

    return (
        <div className="faq" id="faq" style={{backgroundImage: `url("static/images/notexture-bg.jpg")`}}>
            <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Most commonly questions asked about AlignAI. <br />
                    Can’t find what you’re looking for? Chat with our team!
                </p>
            </div>

            <div className="categories">
                {["general", "pricing", "dashboard"].map((category) => (
                    <button
                        key={category}
                        className={`category ${questionCategory === category ? "active" : ""}`}
                        onClick={() => selectCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="QA">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((question, index) => (
                        <div key={index} className="faq-item">
                            <div className="question">
                                <h4>{question.question}</h4>
                                {showAnswers[index] ? (
                                    <IoIosArrowUp
                                        className="arrow"
                                        onClick={() => toggleAnswer(index)}
                                    />
                                ) : (
                                    <IoIosArrowDown
                                        className="arrow"
                                        onClick={() => toggleAnswer(index)}
                                    />
                                )}
                            </div>
                            {showAnswers[index] && (
                                <div className="answer">
                                    <p>{question.answer}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No questions available for this category.</p>
                )}
            </div>
        </div>
    );
}
