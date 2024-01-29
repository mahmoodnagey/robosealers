import React from "react";
import ReactDynamicModal from "react-draggable-resizable-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { closeSettingModal } from "../TopRobotInfo/slice/settingModalSlice";
import "./style.scss";
const SettingControl: React.FC = () => {
  const dispatch = useDispatch();
  const opened = useSelector((state: RootState) => state.settingModal.status);
  const element: HTMLDivElement | null =
    document.querySelector(".flexible-modal");

  // Ensure 'element' is not null before calling 'getAttribute'
  const yourAttributeValue: string | null | undefined =
    element?.getAttribute("draggable");

  // useEffect(() => {
  //   console.log(yourAttributeValue);
  // }, [yourAttributeValue]);

  console.log(yourAttributeValue);

  return (
    <ReactDynamicModal
      initWidth={500}
      overlay={false}
      initHeight={400}
      onRequestClose={() => dispatch(closeSettingModal())}
      isOpen={opened}
      data={
        <div className="body">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      }
      headerValue={<div>Modal</div>}
      actions={
        <div>
          <button onClick={() => dispatch(closeSettingModal())}>Close</button>
        </div>
      }
      footerText={"You can add some notes here"}
      style={{
        header: { color: "#fff", backgroundColor: "blue" },
        footer: { color: "blue" },
        actions: { textAlign: "right" },
      }}
    />
  );
};

export default SettingControl;
