import React from 'react';

import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <div className="hero">
      <h1 className="title">About &#129488;</h1>
    </div>

    <style jsx>{`
      * {
        font-family: Helvetica, Arial, sans-serif;
      }

      .hero {
        width: 100%;
        color: #333333;
      }

      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default About;
