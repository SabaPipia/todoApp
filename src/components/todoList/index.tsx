import { useContext, createContext } from "react";
import { todoContext } from "../wrapperComponent";
import TodoItem from "./todoItem/";
import "./style.scss";

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
    const newTodo: any = context?.todos.filter((item) => todo.id !== item.id);
    context?.setTodos([...newTodo]);
    console.log(newTodo);
  };

  const selectTodo = (id?: number) => {
    const updatedTodos: any = context?.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });
    context?.setTodos(updatedTodos);
  };
  return (
    <div className={`todoList`}>
      {context?.todos
        .filter((item) => {
          if (context?.selectedPage === 0) {
            return true;
          } else if (context?.selectedPage === 1) {
            return !item.selected;
          } else if (context?.selectedPage === 2) {
            return item.selected;
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
