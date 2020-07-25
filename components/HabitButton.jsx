import React from 'react';

const HabitButton = ({ isChecked }) => (
  <>
    <button>{isChecked ? '✅' : '❌'}</button>

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
      `}
    </style>
  </>
);

export default HabitButton;
