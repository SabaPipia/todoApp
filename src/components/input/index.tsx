import { useRef, useState, useContext } from "react";
import classNames from "classnames";

import { inputContext } from "../wrapperComponent";
import { Arrow } from "../../icons";
import "./style.scss";

interface Todo {
  text: string;
  id: number;
  selected: boolean;
}

const Input = () => {
  const context = useContext(inputContext);
  const [error, setError] = useState<string | undefined>();
  const [isBlank, setIsBlank] = useState<string | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const addTodo = (todoItem: Todo) => {
    context?.setTodos([...context?.todos, todoItem]);
  };

  const modifyTodo = () => {
    const modifyTodo: Todo[] | undefined =
      context?.todos.map((todo) => {
        if (todo.id === context.modifyID) {
          return {
            ...todo,
            text: context.value,
          };
        }
        return todo;
      }) || [];
    context?.setTodos(modifyTodo);
    context?.setValue("");
    context?.setEditButton(false);
  };

  const handleSave = () => {
    const input = inputRef.current?.value;

    if (input?.trim() === "") {
      setError("Uh-oh! Task field is blank. Please enter a task.");
      setIsBlank("error");
    } else {
      const todoItem: Todo = {
        text: input || "",
        id: Number(new Date()),
        selected: false,
      };
      addTodo(todoItem);
      setIsBlank("");
      setError("");
    }
    context?.setValue("");
  };
  const markAll = () => {
    const mark: Todo[] | undefined =
      context?.todos.map((todo) => {
        return {
          ...todo,
          selected: true,
        };
      }) || [];
    context?.setTodos(mark);
  };

  return (
    <div className="Input">
      <div onClick={markAll}>
        <Arrow />
      </div>
      <p className={classNames(isBlank)}>{error}</p>
      <input
        ref={inputRef}
        placeholder="what needs to be done?"
        value={context?.value}
        onChange={(e) => context?.setValue(e.target.value)}
        onKeyDown={(e) => {
          if (context?.editButton === false && e.key === "Enter") {
            handleSave();
          }
        }}
      />
      {context?.editButton ? (
        <button onClick={modifyTodo} className="save-button">
          Save
        </button>
      ) : null}
    </div>
  );
};

export default Input;
