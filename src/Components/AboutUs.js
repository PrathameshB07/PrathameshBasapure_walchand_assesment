import React from 'react';
import logoImage from '../Images/Logo.png';
import aboutUsStyles from '../Styles/aboutus.module.css';

const AboutUs = () => {
  return (
    <section id="about-us" className={aboutUsStyles.aboutSection}>
      <h2 className={aboutUsStyles.aboutHeading}>About Us</h2>
      <div className={aboutUsStyles.aboutContent}>
        <div className={aboutUsStyles.aboutText}>
          <p>
            At HandiCraft.com, we are passionate about celebrating and preserving the
            rich cultural heritage of handcrafted arts and crafts in Bharat.
          </p>
          <p>
            Established in 2021, our passion was born out of a deep appreciation
            for the skill, creativity, and dedication that goes into every handmade
            piece. We believe that handicrafts are more than just decorative
            objects; they are expressions of cultural identity, storytelling, and
            human ingenuity passed down through generations.
          </p>
        </div>
        <div className={aboutUsStyles.aboutLogo}>
          <img src={logoImage} alt="Company Logo" className={aboutUsStyles.logoImage} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
