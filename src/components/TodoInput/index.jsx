import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { TODO_TASK_SCHEMA } from "utils/validationSchemas";
import styles from "./TodoInput.module.scss";
import cx from "classnames";

const TodoInput = ({ submitHandler }) => {
  

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={TODO_TASK_SCHEMA}
      onSubmit={submitHandler}
    >
      {({ touched, errors }) => (

        <Form className={styles.formContainer}>
          <Field
            className={cx(styles.inputTask, {
              [styles.validInput]: touched.text && !errors.text,
              [styles.invalidInput]: touched.text && errors.text,
            })}
            type="text"
            name="text"
            placeholder="Todo task"
          />
          <div className={styles.errMsg}><ErrorMessage  name="text"/></div>
          <button type="submit" className={styles.btn}>
            New Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoInput;
