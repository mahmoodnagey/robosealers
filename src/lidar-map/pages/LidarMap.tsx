import { Helmet } from "react-helmet";
import MainTitle from "../../design-system/components/MainTitle";
import { useState } from "react";
import { Modal } from "@mantine/core";

export default function LidarMap() {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData("text/plain", ""); // Required for Firefox
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };
  return (
    <>
      <Helmet>
        <title>LidarMap</title>
      </Helmet>
      <MainTitle title="Lidar Map" />
    </>
  );
}
