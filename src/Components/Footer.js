import React from 'react';
import { SocialIcon } from 'react-social-icons';
import footerStyles from '../Styles/footer.module.css'

const Footer = () => {
  return (
    <footer id='footer' className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerSection}>
          <h4 className={footerStyles.footerHeading}>Address</h4>
          <p className={footerStyles.footerText}>12, Walchand College</p>
          <p className={footerStyles.footerText}>Sangli, Maharastra, 416415</p>
          <p className={footerStyles.footerText}>India</p>
        </div>
        <div className={footerStyles.footerSection}>
          <h4 className={footerStyles.footerHeading}>Follow Us</h4>
          <div className={footerStyles.socialLinks}>
            <a href="https://instagram.com" >
            <SocialIcon network='instagram' className={footerStyles.socialLogo}  />
            </a>
            <a href="https://facebook.com">
            <SocialIcon network='facebook' className={footerStyles.socialLogo} />
            </a>
            <a href="https://twitter.com">
              <SocialIcon network='twitter'  className={footerStyles.socialLogo}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;