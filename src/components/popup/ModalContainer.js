import { context } from "@/src/context/context";
import { useContext } from "react";
const ModalContainer = ({ children, nullValue }) => {
  const { modalToggle } = useContext(context);
  return (
    <div className="elisc_tm_modalbox opened">
      <div className="box_inner">
        <div className="close">
          <a
            href="#"
            onClick={() => {
              modalToggle(false);
              nullValue(null);
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default ModalContainer;
