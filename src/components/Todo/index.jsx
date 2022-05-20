import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";
import React, { useState } from "react";
import styles from "./Todo.module.scss";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);

  const toggleIsDone = (id) => {
    const newTodoList = taskList.map((task) => ({
      ...task,
      isDone: task.id === id ? !task.isDone : task.isDone,
    }));
    setTaskList(newTodoList);
  };

  const removeTodo = (id) => {
    const newTodoList = taskList.filter((task) => task.id !== id);
  setTaskList(newTodoList)
  };

  console.log(taskList);
  return (
    <article className={styles.container}>
      <h1 className={styles.heading}>ToDo List</h1>
      <TodoInput taskList={taskList} setTaskList={setTaskList} />
      <TodoList
        taskList={taskList}
        toggleIsDone={toggleIsDone}
        removeTodo={removeTodo}
      />
    </article>
  );
};

export default Todo;
