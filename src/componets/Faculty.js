import React, { useEffect } from 'react';
import './faculty.css';
import profile from '../images/logo.png';
import { motion, useAnimation } from 'framer-motion';

const facultyData = [
  { name: "Dr. Mahesh Mulani", role: "Head of Department", type: "hod" },
  { name: "Manish Dasotiya", role: "Lab Admin", type: "labadmin" },
  { name: "Jay Joshi", role: "Lab Admin", type: "labadmin" },
  { name: "Parth Thacker", role: "Professor", type: "professor" },
  { name: "Drashti Goswami", role: "Professor", type: "professor" },
  { name: "Rita Marwada", role: "Professor", type: "professor" },
  { name: "Sachin Doru", role: "Professor", type: "professor" },
  { name: "Neeraj Macchar", role: "Professor", type: "professor" },
  { name: "Khyati Ben", role: "Clerk", type: "staff" },
  { name: "Manish Bhai", role: "Peon", type: "staff" },
];

const Faculty = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const facultySection = document.querySelector(".faculty-container");
      const windowHeight = window.innerHeight;

      if (facultySection) {
        const sectionTop = facultySection.getBoundingClientRect().top;

        // Trigger animation if the section is in view
        if (sectionTop < windowHeight - 100) {
          controls.start({ opacity: 1, x: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const sections = [
    { data: facultyData.filter(member => member.type === "hod"), className: "single-row" },
    { data: facultyData.filter(member => member.type === "labadmin"), className: "-row" },
    { data: facultyData.filter(member => member.type === "professor"), className: "multi-row" },
    { data: facultyData.filter(member => member.type === "staff"), className: "double-row" },
  ];

  return (
    <div className="faculty-container bg-light"
    >
      {sections.map((section, index) => (
        <motion.div  
        
          key={index}
          className={`faculty-row ${section.className}`}
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
        >
          {section.data.map((member, index) => (
            
            <div id='card' style={{ 
              backgroundColor: 'rgb(235, 239, 246)',  // light blue background
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
             key={index} 
             className={`faculty-card ${member.type}-card` }>
              <img src={profile} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Faculty;
