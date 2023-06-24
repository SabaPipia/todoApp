import React from "react";

import "./style.scss";

type TodoItemProps = {
  id?: number;
  value?: string;
};
const TodoItem: React.FC<TodoItemProps> = ({ id, value }) => {
  console.log(id);
  return <li key={id}>{value}</li>;
};

export default TodoItem;
