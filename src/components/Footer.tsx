import { Link } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LinkItem {
    header: string;
    link: string;
}

export default function Footer() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 80%",
                    markers: false,
                }
            });
            tl.from(".foot-title", {
                opacity: 0,
                duration: .5,
                scale: .8
            })
            tl.from(".foot-text", {
                opacity: 0,
                duration: .5,
                yPercent: -100,
                stagger: .1
            })

            gsap.from(".socials img", {
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 80%",
                },
                opacity: 0,
                duration: .5,
                scale: .2,
                ease: "back",
            })

            gsap.from(".bottom p", {
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 80%",
                    markers: false,
                },
                opacity: 0,
                duration: .5,
            })
        }
    )

    const about: LinkItem[] = [
        { header: "About Us", link: "/about" },
        { header: "Teams", link: "/" },
        { header: "Career", link: "/" },
        { header: "News", link: "/" },
        { header: "Contact Us", link: "/" },
    ];

    const resources: LinkItem[] = [
        { header: "About Us", link: "/about" },
        { header: "Pricing", link: "/pricing" },
        { header: "Community", link: "/" },
        { header: "Privacy policy", link: "/" },
        { header: "Customer stories", link: "/" },
    ];

    const company: LinkItem[] = [
        { header: "Stakeholders", link: "/" },
        { header: "Partnerships", link: "/" },
        { header: "Career", link: "/" },
        { header: "Press", link: "/" },
        { header: "Operating principles", link: "/" },
    ];

    const legal: LinkItem[] = [
        { header: "Security", link: "/" },
        { header: "Privacy policy", link: "/" },
        { header: "Cookie policy", link: "/" },
        { header: "Cookie setting", link: "/" },
    ];

    const renderSection = (title: string, items: LinkItem[]) => (
        <div className="footer-section">
            <h4 className="foot-title">{title}</h4>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="foot-text">
                        <Link to={item.link}>{item.header}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer>
            <div className="top">
                <div className="address">
                    <div className="logo">
                        <img src="static/images/alignAI-icon.png" alt="Logo" />
                        <h3>
                            Align<span>AI</span>
                        </h3>
                    </div>

                    <div className="office">
                        <h3 className="foot-title">Lagos Office</h3>
                        <p className="foot-text">
                            27-29 Adeyemo Alakija Street, Cowrie House Victoria
                            Island, Lagos.
                        </p>
                    </div>

                    <div className="office">
                        <h3 className="foot-title">UK Office</h3>
                        <p className="foot-text">
                            221B Baker Street, Marylebone, London, United
                            Kingdom.
                        </p>
                    </div>
                </div>

                <div className="footer-details">
                    {renderSection("About", about)}
                    {renderSection("Resources", resources)}
                    {renderSection("Company", company)}
                    {renderSection("Legal", legal)}
                </div>
            </div>

            <div className="bottom">
                <p>Copyright 2024. All rights reserved.</p>
                <div className="socials">
                    <img src="static/images/youtube.png" alt="Youtube" />
                    <img src="static/images/LinkedIn.png" alt="LinkedIn" />
                    <img src="static/images/X.png" alt="X" />
                    <img src="static/images/facebook.png" alt="Facebook" />
                    <img src="static/images/instagram.png" alt="Instagram" />
                </div>
            </div>
        </footer>
    );
}
