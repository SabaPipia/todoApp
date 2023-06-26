import React, { useContext } from "react";
import classNames from "classnames";
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
    <div className="todo-item" key={index}>
      <div className="left-part">
        <div
          className={classNames("icon", { opacity: item.selected })}
          onClick={() => selectTodo(item.id)}
        >
          <Check />
        </div>
        <span
          className={classNames({ "line-through": item.selected })}
          onClick={() => {
            context?.setEditButton(true);
            handleClick(item);
          }}
        >
          {item.text}
        </span>
      </div>
      <div className="right-part" onClick={() => removeTodo(item)}>
        <Remove />
      </div>
    </div>
  );
};

export default TodoItem;
