import  { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
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
            <div className="navbar" style={menu ? { overflow: "visible" } : {}}>
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
