import React from 'react';
import { Form, Formik, Field } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_HABIT = gql`
  mutation addHabit($habit: HabitInput) {
    addHabit(habit: $habit) {
      _id
      name
    }
  }
`;

const HabitForm = () => {
  const [addHabit] = useMutation(ADD_HABIT, {
    refetchQueries: ['getHabitsList'],
  });

  const handleFormSubmit = async (values, { setSubmitting }) => {
    await addHabit({ variables: { habit: { name: values.habitTitle } } });

    setSubmitting(false);
  };

  return (
    <div className="form-wrapper">
      <Formik initialValues={{ habitTitle: '' }} onSubmit={handleFormSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="habitTitle" />

            <button type="submit" disabled={isSubmitting}>
              Add habit
            </button>
          </Form>
        )}
      </Formik>

      <style jsx>{`
        .form-wrapper {
          margin-top: 10px;
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
        }

        button {
          margin-left: 20px;
          width: 80px;
          height: 28px;
        }
      `}</style>
    </div>
  );
};

export default HabitForm;
