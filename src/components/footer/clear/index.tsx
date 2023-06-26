import { useContext } from "react";

import { footerContext } from "../../wrapperComponent";
import "./style.scss";

const Clear = () => {
  const context = useContext(footerContext);

  const clearCompleted = () => {
    context?.setTodos(context?.todos.filter((todo) => !todo.selected));
  };

  return (
    <div className="clear" onClick={clearCompleted}>
      Clear Completed
    </div>
  );
};

export default Clear;
