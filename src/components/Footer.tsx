import '../styles/Footer.css';
import { BrandIcon, CallIcon, MailIcon } from './Customicons';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerInner">
                <div className="contact">
                    <div className="branding footerBranding">
                        <BrandIcon />
                        <a href='/' className='brandName footerBrandName'>uifry™</a>
                    </div>
                    <div className="contactOption">
                        <MailIcon />
                        <a href="/"> help@frybix.com</a>
                    </div>
                    <div className="contactOption">
                        <CallIcon />
                        <a href="/"> +1234 456 678</a>
                    </div>
                </div>
                <div className="FooterOption">
                    <p>Links</p>
                    <div className="contactOption">
                        <a href="/"> Home</a>
                    </div>
                    <div className="contactOption">
                        <a href="/"> About Us</a>
                    </div>
                    <div className="contactOption">
                        <a href="/"> Bookings</a>
                    </div>
                    <div className="contactOption">
                        <a href="/"> Blog</a>
                    </div>

                </div>
                <div className="FooterOption">
                    <p>Legal</p>
                    <div className="contactOption">
                        <a href="/"> Terms of Use</a>
                    </div>
                    <div className="contactOption">
                        <a href="/"> Privacy Policy</a>
                    </div>
                    <div className="contactOption">
                        <a href="/"> Cookie Policy</a>
                    </div>

                </div>
                <div className="FooterOption">
                    <p>Product</p>
                    <div className="contactOption">
                        <a href="/"> Take Tour</a>
                    </div>
                    <div className="contactOption">
                        <a href="/"> Live Chat</a>
                    </div>
                    <div className="contactOption">
                        <a href="/"> Reviews</a>
                    </div>

                </div>
                <div className="FooterOption">
                    <p>NewsLetter</p>
                    <div className="contactOption">
                        <a href="/"> Stay Up To Date</a>
                    </div>
                    <div className="contactOption newsLetter">
                        <input className='newsLetterInput' type="email" placeholder='Your email' />
                        <button className='landingPageBtn'> Subscribe</button>
                    </div>

                </div>
            </div>
            <div className="copyRight">
                <p>Copyright 2024 Uifry.com All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer