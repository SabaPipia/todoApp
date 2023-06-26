import { useContext } from "react";
import { todoContext } from "../wrapperComponent";
import TodoItem from "./todoItem/";

interface Todo {
  text?: string;
  id?: number;
  selected?: boolean;
}

const TodoList = () => {
  const context = useContext(todoContext);

  const handleClick = (item: Todo) => {
    context?.setValue(item.text || "");
    context?.setModifyID(item.id || NaN);
  };

  const removeTodo = (todo: Todo) => {
    context?.setTodos(context?.todos.filter((item) => todo.id !== item.id));
  };

  const selectTodo = (id?: number) => {
    context?.setTodos(
      context?.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={"todoList"}>
      {context?.todos
        .filter((item) => {
          switch (context?.selectedPage) {
            case "ALL":
              return true;
            case "ACTIVE":
              return !item.selected;
            case "COMPLETED":
              return item.selected;
            default:
              return false;
            // break;
          }
        })
        .map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            item={item}
            selectTodo={selectTodo}
            handleClick={handleClick}
            removeTodo={removeTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
