import { useContext } from "react";
import "./style.scss";
import { footerContext } from "../../wrapperComponent";

const Clear = () => {
  const context = useContext(footerContext);
  const clearCompleted = () => {
    const updatedTodos: any = context?.todos.filter(
      (todo) => todo.selected !== true
    );
    context?.setTodos([...updatedTodos]);
  };

  return (
    <div className="clear" onClick={clearCompleted}>
      Clear Completed
    </div>
  );
};

export default Clear;
