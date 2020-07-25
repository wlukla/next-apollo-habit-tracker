import React from 'react';

import HabitButton from './HabitButton';

const Habit = () => (
  <article>
    <header>
      <h3>Habit Title</h3>
    </header>
    <main>
      <div className="habit-buttons-wrapper">
        <HabitButton isChecked />
        <HabitButton />
        <HabitButton isChecked />
        <HabitButton isChecked />
        <HabitButton isChecked />
        <HabitButton isChecked />
        <HabitButton />
      </div>
    </main>

    <style jsx>{`
      .habit-buttons-wrapper {
        display: flex;
      }
    `}</style>
  </article>
);

export default Habit;
