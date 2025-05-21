import React, { useEffect, useState } from 'react';
import logo2 from '../images/logo2.png';
import home from '../images/home.png';
import './Home.css';
import AboutUs from './AboutUs';
import Academics from './Academics';
import Contact from './Contact';
import { Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function HomePage() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.history.pushState(null, '', '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container-fluid min-vh-100 bg-light"
        >
            <Navbar />
            {/* Main Section */}
            <div className="container d-flex flex-column flex-md-row mb-5">
                {/* Left Side */}
                <motion.div
                    className="col-md-6 d-flex flex-column align-items-start mt-5"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.img
                        id="img"
                        src={logo2}
                        alt="Logo"
                        className="img-fluid mb-3 mt-3"
                        style={{ maxWidth: "200px" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    <h1>Welcome To DOCS</h1>
                    <h2>DEPARTMENT OF COMPUTER SCIENCE</h2>
                    <h5 className="mb-3 mt-3">Login As</h5>
                    <motion.div
                        className="d-flex gap-3"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <button className="btn btn-primary">Student</button>
                    </motion.div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    className="col-md-6 d-flex align-items-center justify-content-center mt-4 mt-md-0"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.img
                        id="img2"
                        src={home}
                        alt="Home"
                        className="img-fluid"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>
            </div>

            {/* About Us Section */}
            <motion.div
                id="aboutus-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <AboutUs />
            </motion.div>

            {/* Academics Section */}
            <motion.div
                id="academics-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Academics />
            </motion.div>

            {/* Contact Section */}
            <motion.div
                id="Contact-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Contact />
            </motion.div>

            {/* Back to Top Button */}
            {showScrollButton && (
                <motion.button
                    className="btn btn-dark position-fixed back-to-top-btn"
                    onClick={handleBackToTop}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    ↑
                </motion.button>
            )}
        </motion.div>
    );
}