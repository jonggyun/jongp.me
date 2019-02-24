import React from 'react';
import './styles.scss';
import { Link } from 'gatsby';

const AboutBtn = () => (
  <Link className="about-btn" to="/about/">
    #About_Me
  </Link>
);

export default AboutBtn;
