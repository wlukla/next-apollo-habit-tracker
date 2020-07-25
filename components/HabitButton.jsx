import React from 'react';

const HabitButton = ({ isChecked, date }) => (
  <>
    <div>
      <span className="habit-button-wrapper">
        {date.getDate()}/{date.getMonth() + 1}
      </span>
      <button>{isChecked ? '✅' : '❌'}</button>
    </div>

    <style jsx>
      {`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 26px;
          width: 26px;
          font-size: 20px;
          margin: 10px 10px;
          background-color: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }

        .habit-button-wrapper {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default HabitButton;
