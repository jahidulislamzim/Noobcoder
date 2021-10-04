import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container mt-5'>
            <div className='about-title justify-content-center d-flex'>
                <h1>Come help us build the education the world deserves</h1>
            </div>
            <div className='about-div'>
                <h1>About NoobCoders</h1>
                <p>When we started NoobCoders, our goal was to give anyone in the world the ability to learn the skills they’d need to succeed in the 21st century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped millions of people worldwide unlock modern technical skills and reach their full potential through code.</p>
            </div>
            <div className='about-div mb-5'>
                <h1>Our Mission</h1>
                <p>We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that’s required is the curiosity and drive to learn. At Codecademy, we are committed to empowering all people, regardless of where they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them.</p>
            </div>
        </div>
    );
};

export default About;