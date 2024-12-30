import React from "react";
import { Link } from "react-router";

interface LinkItem {
    [x: string]: any;
    header: string;
    link: string;
}

export default function Footer(){

    const about: LinkItem[] = [
        {
            header: "About Us",
            link: "/about"
        },
        {
            header: "Teams",
            link: "/"
        },
        {
            header: "Career",
            link: "/"
        },
        {
            header: "News",
            link: "/"
        },
        {
            header: "Contact Us",
            link: "/"
        },
    ]

    const resources: LinkItem[] = [
        {
            header: "About Us",
            link: "/about"
        },
        {
            header: "Pricing",
            link: "/pricing"
        },
        {
            header: "Community",
            link: "/"
        },
        {
            header: "Privacy policy",
            link: "/"
        },
        {
            header: "Customer stories",
            link: "/"
        },
    ]

    const company: LinkItem[] = [
        {
            header: "Stakeholders",
            link: "/"
        },
        {
            header: "Partnerships",
            link: "/"
        },
        {
            header: "Career",
            link: "/"
        },
        {
            header: "Press",
            link: "/"
        },
        {
            header: "Operating principles",
            link: "/"
        },
    ]

    const ls: LinkItem[] = [
        {
            header: "Security",
            link: "/"
        },
        {
            header: "Privacy policy",
            link: "/"
        },
        {
            header: "Cookie policy",
            link: "/"
        },
        {
            header: "Cookie setting",
            link: "/"
        }
    ]

    const renderSection = (title:string, items:LinkItem) => (
        <div className="footer-section">
            <h4>{title}</h4>
            <ul>
            {items.map((item: LinkItem, index: number) => (
                    <li key={index}>
                        <Link to={item.link}>{item.header}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );



    return(
        <footer>
            <div className="top">
                <div className="address">
                    <div className="logo">
                        <img src="images/alignAI-icon.png" alt="Logo"/>
                        <h3>Align<span>AI</span></h3>
                    </div>

                    <div className="office">
                        <h3>Lagos Office</h3>
                        <p>27-29 Adeyemo Alakija Street, Cowrie House Victoria Island, Lagos.</p>
                    </div>

                    <div className="office">
                        <h3>UK Office</h3>
                        <p>221B Baker Street, Marylebone, London, United Kingdom.</p>
                    </div>

                </div>

                <div className="about-footer">
                    {renderSection("About", about)}
                </div>

                <div className="resource-footer">
                    {renderSection("Resources", resources)}
                </div>

                <div className="company-footer">
                    {renderSection("Company", company)}
                </div>

                <div className="ls-footer">
                    {renderSection("Legal", ls)}
                </div>
            </div>
            <div className="bottom">
                <p>Copyright 2024. All rights reserved.</p>
                <div className="socials">
                    <img src="images/youtube.png" alt="Youtube" />
                    <img src="images/LinkedIn.png" alt="LinkedIn" />
                    <img src="images/X.png" alt="X" />
                    <img src="images/facebook.png" alt="facebook" />
                    <img src="images/instagram.png" alt="instagram" />

                </div>
            </div>
        </footer>
    )
}