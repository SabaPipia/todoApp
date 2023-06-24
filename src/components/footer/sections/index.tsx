import { useState, useContext } from "react";
import "./style.scss";
import { footerContext } from "../../wrapperComponent";

const Sections = () => {
  const context = useContext(footerContext);
  const [key, setK] = useState<number>(0);
  const handleSelect = (key: number) => {
    context?.setSelectedPage(key);
    setK(key);
  };
  return (
    <div className="sections">
      <ul className="sectionsUl">
        <li
          data-key={0}
          style={{
            border: key === 0 ? "1px solid rgba(204, 25, 25, 0.596)" : "",
          }}
          onClick={(e) => {
            const key = Number(e.currentTarget.getAttribute("data-key"));
            handleSelect(key);
          }}
        >
          All
        </li>
        <li
          data-key={1}
          style={{
            border: key === 1 ? "1px solid rgba(204, 25, 25, 0.596)" : "",
          }}
          onClick={(e) => {
            const key = Number(e.currentTarget.getAttribute("data-key"));
            handleSelect(key);
          }}
        >
          Active
        </li>
        <li
          data-key={2}
          style={{
            border: key === 2 ? "1px solid rgba(204, 25, 25, 0.596)" : "",
          }}
          onClick={(e) => {
            const key = Number(e.currentTarget.getAttribute("data-key"));
            handleSelect(key);
          }}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default Sections;
