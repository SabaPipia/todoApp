import { useContext } from "react";
import "./style.scss";
import { footerContext } from "../../wrapperComponent";

const Items = () => {
  const context = useContext(footerContext);
  const itemCounter = () => {
    let count = 0;
    switch (context?.selectedPage) {
      case 0:
      case 1:
        context?.todos.map((todo) => {
          if (!todo.selected) {
            count++;
          }
        });
        break;
      case 2:
        context?.todos.map((todo) => {
          if (todo.selected) {
            count++;
          }
        });
        break;
    }
    return count;
  };
  return <div className="items">{itemCounter()} items left</div>;
};

export default Items;
