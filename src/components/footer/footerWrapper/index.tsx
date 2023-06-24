import Clear from "../clear";
import Items from "../items";
import Sections from "../sections";
import "./style.scss";

const FooterWrapper = () => {
  return (
    <div className="footerWrapper">
      <Items />
      <Sections />
      <Clear />
    </div>
  );
};

export default FooterWrapper;
