import { useContext } from "react";

import { footerContext } from "../../wrapperComponent";
import "./style.scss";

const Items = () => {
  const context = useContext(footerContext);

  const itemCounter = () => {
    let count = 0;
    switch (context?.selectedPage) {
      case "ALL":
      case "ACTIVE":
        context?.todos.map((todo) => {
          if (!todo.selected) {
            count++;
          }
          return count;
        });
        break;
      case "COMPLETED":
        context?.todos.map((todo) => {
          if (todo.selected) {
            count++;
          }
          return count;
        });
        break;
    }
    return count;
  };
  return <div className="items">{itemCounter()} items left</div>;
};

export default Items;
