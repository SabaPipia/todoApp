import { useState, createContext } from "react";
import Input from "../input";
import TodoList from "../todoList";
import FooterWrapper from "../footer/footerWrapper";
import "./style.scss";

interface Todo {
  text: string;
  id: number;
  selected: boolean;
}

interface inputType {
  setValue: (value: string) => void;
  setTodos: (Todo: Todo[]) => void;
  setEditButton: (editButton: boolean) => void;
  value: string;
  todos: Todo[];
  editButton: boolean;
  modifyID?: number;
}
interface todoType {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  setValue: (value: string) => void;
  setEditButton: (edit: boolean) => void;
  setModifyID: (id: number) => void;
  selectedPage: number;
}
interface footerType {
  todos: Todo[];
  selectedPage: number;
  setTodos: (todo: Todo[]) => void;
  setSelectedPage: (page: number) => void;
}

export const inputContext = createContext<inputType | undefined>(undefined);
export const todoContext = createContext<todoType | undefined>(undefined);
export const footerContext = createContext<footerType | undefined>(undefined);

const WrapperComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>("");
  const [editButton, setEditButton] = useState<boolean>(false);
  const [modifyID, setModifyID] = useState<number>();
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="main">
        <inputContext.Provider
          value={{
            setValue: setValue,
            setTodos: setTodos,
            setEditButton: setEditButton,
            value: value,
            todos: todos,
            editButton: editButton,
            modifyID: modifyID,
          }}
        >
          <Input />
        </inputContext.Provider>
        <todoContext.Provider
          value={{
            todos: todos,
            setTodos: setTodos,
            setValue: setValue,
            setEditButton: setEditButton,
            setModifyID: setModifyID,
            selectedPage: selectedPage,
          }}
        >
          <TodoList />
        </todoContext.Provider>
      </div>
      <footerContext.Provider
        value={{
          todos: todos,
          selectedPage: selectedPage,
          setTodos: setTodos,
          setSelectedPage: setSelectedPage,
        }}
      >
        <FooterWrapper />
      </footerContext.Provider>
    </div>
  );
};

export default WrapperComponent;
