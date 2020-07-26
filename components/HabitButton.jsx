import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_EVENT = gql`
  mutation addEvent($date: Date, $habitId: ID) {
    addEvent(date: $date, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation removeEvent($eventId: ID, $habitId: ID) {
    removeEvent(eventId: $eventId, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const HabitButton = ({ isChecked, date }) => {
  return (
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
};

export default HabitButton;
