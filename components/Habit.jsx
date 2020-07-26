import React from 'react';

import HabitButton from './HabitButton';

const getLastSevenDays = () => {
  const dates = [0, 1, 2, 3, 4, 5, 6].reverse().map((day) => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);

    return tempDate;
  });

  return dates;
};

const Habit = ({ habit }) => {
  const dates = getLastSevenDays();

  return (
    <article>
      <header>
        <h3>{habit.name}</h3>
      </header>
      <main>
        <div className="habit-buttons-wrapper">
          {dates.map((date) => (
            <HabitButton key={date.getDay()} date={date} isChecked />
          ))}
        </div>
      </main>

      <style jsx>{`
        article {
          width: 100%;
          max-width: 600px;
          margin-bottom: 20px;
          padding: 20px;
          border-radius: 6px;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        }

        h3 {
          margin-bottom: 12px;
          padding-bottom: 4px;
          border-bottom: 4px solid #718096;
        }

        .habit-buttons-wrapper {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </article>
  );
};

export default Habit;
