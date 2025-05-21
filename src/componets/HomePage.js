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
            className="container-fluid bg-light p-0"
        >
            <Navbar />

            {/* Main Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Left Side */}
                    <motion.div
                        className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.img
                            src={logo2}
                            alt="Logo"
                            className="img-fluid mb-3"
                            style={{ maxWidth: "200px" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                        <h1 className="fw-bold">Welcome To DOCS</h1>
                        <h2 className="fs-4">DEPARTMENT OF COMPUTER SCIENCE</h2>
                        <h5 className="mt-3">Login As</h5>
                        <motion.div
                            className="d-flex justify-content-center justify-content-md-start gap-3 mt-2"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <button className="btn btn-primary">Student</button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="col-12 col-md-6 d-flex justify-content-center"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.img
                            src={home}
                            alt="Home"
                            className="img-fluid"
                            style={{ maxHeight: "400px" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Sections */}
            <motion.div id="aboutus-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <AboutUs />
            </motion.div>
            <motion.div id="academics-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <Academics />
            </motion.div>
            <motion.div id="contact-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
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
