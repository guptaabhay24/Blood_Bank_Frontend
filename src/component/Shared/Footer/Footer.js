import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Blood Bank</h4>
                        <ul>
                            <li><Link to="/#">about us</Link></li>
                            <li><Link to="/#">our services</Link></li>
                            <li><Link to="/#">privacy policy</Link></li>
                            <li><Link to="/#">join us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="/#">FAQ</Link></li>
                            <li><Link to="/contact-us">contact</Link></li>
                            <li><Link to="/#">query</Link></li>
                            <li><Link to="/#">availablity</Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Donate Blood</h4>
                        <ul>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/user-blood-request">get blood</Link></li>
                            <li><Link to="/be-a-donar">be a donor</Link></li>
                            <li><Link to="/#">donate money</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/#"><i className="fab fa-twitter"></i></Link>
                            <Link to="/#"><i className="fab fa-instagram"></i></Link>
                            <Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;