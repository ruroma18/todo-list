import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";
import React, { useReducer} from "react";
import styles from "./Todo.module.scss";
import reducer from "./reducer";
import ACTION_TYPES from "./actionTypes";

const Todo = () => {
  // const [taskList, setTaskList] = useState([]);

  const [state, dispatch] = useReducer(reducer, {taskList: []})
  console.log(state)

  const toggleIsDone = (id) => {
    dispatch({type: ACTION_TYPES.IS_DONE, id})
  };

  const removeTodo = (id) => {
    dispatch({type: ACTION_TYPES.REMOVE, id})    
  };

  const submitHandler = ({ text }, formikBag) => {
    dispatch({type: ACTION_TYPES.ADD, text})
    formikBag.resetForm();
  };

  console.log(state);
  return (
    <article className={styles.container}>
      <h1 className={styles.heading}>ToDo List</h1>
      <TodoInput submitHandler={submitHandler} />
      <TodoList
        taskList={state.taskList}
        toggleIsDone={toggleIsDone}
        removeTodo={removeTodo}
      />
    </article>
  );
};

export default Todo;
