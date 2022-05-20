import styles from "./TodoList.module.scss";
import cx from "classnames";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = ({ taskList, toggleIsDone, removeTodo }) => {
  return (
    <ul className={styles.taskContainer}>
      {taskList.map((task) => (
        <li
          className={cx(styles.taskItem, {
            [styles.notCheckedTaskItem]: !task.isDone,
            [styles.checkedTaskItem]: task.isDone,
          })}
          key={task.id}
        >
          <input
            className={styles.taskCheck}
            type="checkbox"
            onChange={() => toggleIsDone(task.id)}
          />
          {task.text}

          <DeleteIcon
            className={styles.deleteBtn}
            onClick={() => removeTodo(task.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
