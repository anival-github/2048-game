import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div>
      <a href="https://github.com/anival-github">
        My Github
      </a>
    </div>
    <div>
      2021
    </div>
    <div>
      <a href="https://rs.school/js/">
        <img
          src="https://rs.school/images/rs_school_js.svg"
          alt="logo"
          className={styles.logo}
        />
      </a>
    </div>
  </div>
);

export default Footer;
