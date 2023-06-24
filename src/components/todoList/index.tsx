import { useContext } from "react";
import { Check, Remove } from "../../icons";
import { todoContext } from "../wrapperComponent";
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
      {context?.todos.map((item, index: number) => {
        if (context?.selectedPage === 0) {
          return (
            <div className="todoItem" key={index}>
              <div className="leftPart">
                <div
                  className={`icon`}
                  style={{
                    opacity: item.selected ? "1" : "",
                  }}
                  onClick={() => selectTodo(item.id)}
                >
                  <Check />
                </div>
                <span
                  style={{
                    textDecoration: item.selected ? "line-through" : "none",
                    color: item.selected ? "#8080808a" : "",
                    fontWeight: item.selected ? "500" : "300",
                  }}
                  onClick={() => {
                    context?.setEditButton(true);
                    handleClick(item);
                  }}
                >
                  {item.text}
                </span>
              </div>
              <div className="rightPart" onClick={() => removeTodo(item)}>
                <Remove />
              </div>
            </div>
          );
        }
        if (context?.selectedPage === 1) {
          if (!item.selected) {
            return (
              <div className="todoItem" key={index}>
                <div className="leftPart">
                  <div
                    className={`icon`}
                    style={{
                      opacity: item.selected ? "1" : "",
                    }}
                    onClick={() => selectTodo(item.id)}
                  >
                    <Check />
                  </div>
                  <span
                    style={{
                      textDecoration: item.selected ? "line-through" : "none",
                      color: item.selected ? "#8080808a" : "",
                      fontWeight: item.selected ? "500" : "300",
                    }}
                    onClick={(e) => {
                      context?.setEditButton(true);
                      handleClick(item);
                    }}
                  >
                    {item.text}
                  </span>
                </div>
                <div className="rightPart" onClick={() => removeTodo(item)}>
                  <Remove />
                </div>
              </div>
            );
          }
        }
        if (context?.selectedPage === 2) {
          if (item.selected) {
            return (
              <div className="todoItem" key={index}>
                <div className="leftPart">
                  <div
                    className={`icon`}
                    style={{
                      opacity: item.selected ? "1" : "",
                    }}
                    onClick={() => selectTodo(item.id)}
                  >
                    <Check />
                  </div>
                  <span
                    style={{
                      textDecoration: item.selected ? "line-through" : "none",
                      color: item.selected ? "#8080808a" : "",
                      fontWeight: item.selected ? "500" : "300",
                    }}
                    onClick={(e) => {
                      context?.setEditButton(true);
                      handleClick(item);
                    }}
                  >
                    {item.text}
                  </span>
                </div>
                <div className="rightPart" onClick={() => removeTodo(item)}>
                  <Remove />
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default TodoList;
