import  { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {

    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            gsap.from(".navbar", {
                opacity: 0,
                width: 0,
                duration: 1,
                ease: "back",
                delay: 0.5
            })

            gsap.from("ul", {
                opacity: 0,
                scale: 1.2,
                duration: 1,
                ease: "power2",
                delay: 1
            })
        }
    )

    const [menu, setMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleMenu = () => setMenu((prevMenu) => !prevMenu);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navItems = [
        { navElement: "Home", link: "/" },
        { navElement: "About Us", link: "/about" },
        { navElement: "Pricing", link: "/pricing" },
        { navElement: "FAQ", link: "/faq" },
    ];

    const navMenu = navItems.map((navItem) => (
        <NavLink
            to={navItem.link}
            onClick={handleMenu}
            key={navItem.navElement}
        >
            <li>{navItem.navElement}</li>
        </NavLink>
    ));

    return (
        <nav>
            <div
                className="navbar"
                style={{
                    backgroundImage: isMobile ? "none" : `url("static/images/background.png")`,
                    overflow: menu ? "visible" : "hidden"
                }}
            >
                <a className="logo" href="/">
                    <img src="static/images/alignAI-icon.png" alt="Logo" />
                    <h3>
                        Align<span>AI</span>
                    </h3>
                </a>

                <div className={`menu-wrapper ${menu ? "active-menu" : ""}`}>
                    <ul>{navMenu}</ul>
                    <div className="sl-btn">
                        <Link to="/sign-up">
                            <button className="sign-up">Sign up</button>
                        </Link>
                        <Link to="/login">
                            <button className="login">Login</button>
                        </Link>
                    </div>
                </div>

                {isMobile && (
                    menu ? (
                        <IoClose
                            onClick={handleMenu}
                            style={{ zIndex: 3, cursor: "pointer" }}
                        />
                    ) : (
                        <IoIosMenu
                            onClick={handleMenu}
                            style={{ zIndex: 3, cursor: "pointer" }}
                        />
                    )
                )}
            </div>
        </nav>
    );
}
