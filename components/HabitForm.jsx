import React from 'react';
import { Form, Formik, Field } from 'formik';

const HabitForm = () => {
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{ habitTitle: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
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
