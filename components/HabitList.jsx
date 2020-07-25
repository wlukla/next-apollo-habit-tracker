import React from 'react';

import Habit from './Habit';

const HabitList = () => {
  return (
    <section>
      <h2>My habits:</h2>
      <Habit />
      <Habit />
      <Habit />

      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h2 {
          margin: 20px 0 26px;
        }
      `}</style>
    </section>
  );
};

export default HabitList;
