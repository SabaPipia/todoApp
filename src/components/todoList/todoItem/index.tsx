import React, { useContext } from "react";
import { Check, Remove } from "../../../icons";

import "./style.scss";
import { todoContext } from "../../wrapperComponent";
type todo = {
  text: string;
  id: number;
  selected: boolean;
};

interface TodoItemProps {
  index: number;
  item: todo;
  selectTodo: (id: number) => void;
  handleClick: (todo: todo) => void;
  removeTodo: (todo: todo) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({
  index,
  item,
  selectTodo,
  handleClick,
  removeTodo,
}) => {
  const context = useContext(todoContext);
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
};

export default TodoItem;
