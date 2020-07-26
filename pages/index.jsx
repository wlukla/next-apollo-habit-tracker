import React from 'react';

import Layout from '../components/Layout';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';
import withApollo from '../lib/apollo';

const Home = () => {
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Track your habits like a boss &#128526;</h1>
        <HabitForm />
        <HabitList />
      </div>

      <style jsx>{`
        * {
          font-family: Helvetica, Arial, sans-serif;
        }

        .hero {
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
};

export default withApollo(Home);
