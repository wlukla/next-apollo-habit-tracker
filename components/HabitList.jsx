import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Habit from './Habit';

const GET_HABITS_LIST = gql`
  query getHabitsList {
    habits {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const HabitList = () => {
  const { data, loading, error } = useQuery(GET_HABITS_LIST);

  if (loading) {
    return <section />;
  }

  if (error) {
    return (
      <section>
        <h3>Something wrong happened! We are already working on fixing it</h3>

        <style jsx>
          {`
            section {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        </style>
      </section>
    );
  }

  return (
    <section>
      <h2>My habits:</h2>
      {data.habits.map((habit) => (
        <Habit key={habit._id} habit={habit} />
      ))}

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
