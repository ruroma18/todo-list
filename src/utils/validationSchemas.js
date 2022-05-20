import * as yup from 'yup';

export const TODO_TASK_SCHEMA = yup.object({
  text: yup.string()
  .matches(/^[A-Za-z]{1}[A-z0-9" "]{3,100}\b/gm, 'Text must have only letters and numbers')
  .required('Reduqire!')
})