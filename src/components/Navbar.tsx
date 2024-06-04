"use client";
import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { BrandIcon, HamburgerIcon, CloseIcon } from './Customicons';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);
    return (
        <nav className="navbar">
            <div className="branding">
                <BrandIcon />
                <a href='/' className='brandName'>uifry™</a>
            </div>
            <div className="navItems">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Features</a>
                    </li>
                </ul>
            </div>
            <div className="downloadBtn">
                <button className='landingPageBtn'>
                    Download
                </button>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {<HamburgerIcon />}
            </div>
            <div className={menuOpen === false ? "hamburgerMenu menuSlide" : "hamburgerMenu"}>

                <div className="closeIcon" onClick={toggleMenu}>
                    {<CloseIcon />}
                </div>
                <div className="menuItems">
                    <div className="menuBranding">
                        <div className="branding">
                            <BrandIcon />
                            <a href='/' className='brandName'>uifry™</a>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                    </ul>
                    <div className="menuBtn">
                        <button className='landingPageBtn'>
                            Download
                        </button>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Navbar