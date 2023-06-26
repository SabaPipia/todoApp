import { useContext } from "react";
import classNames from "classnames";

import { footerContext } from "../../wrapperComponent";
import "./style.scss";

const Sections = () => {
  const context = useContext(footerContext);

  const handleSelect = (filter: string) => {
    context?.setSelectedPage(filter);
  };

  return (
    <div className="sections">
      <ul className="sections-ul">
        <li
          className={classNames({
            "section-item-active": context?.selectedPage === "ALL",
          })}
          onClick={() => {
            handleSelect("ALL");
          }}
        >
          All
        </li>
        <li
          className={classNames({
            "section-item-active": context?.selectedPage === "ACTIVE",
          })}
          onClick={() => {
            handleSelect("ACTIVE");
          }}
        >
          Active
        </li>
        <li
          className={classNames({
            "section-item-active": context?.selectedPage === "COMPLETED",
          })}
          onClick={() => {
            handleSelect("COMPLETED");
          }}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default Sections;
