import { Helmet } from "react-helmet";
import MainTitle from "../../design-system/components/MainTitle";
import { Badge, Flex } from "@mantine/core";
import AreaTimeFilter from "../../design-system/components/AreaTimeFilter";
import CracksVolumeTable from "../components/CracksVolumeTable";

export default function CracksVolume() {
  //   const color = usePrimaryColorHex();
  const handleRunningHoursFilter = (values: any) => {
    // Make API request specific to this component
    console.log(values);
  };

  return (
    <>
      <Helmet>
        <title>Cracks Volume</title>
      </Helmet>
      <MainTitle title="Cracks Volume" />
      <AreaTimeFilter onFilter={handleRunningHoursFilter} />
      <Flex justify="center" my="md">
        <Badge color="green" variant="light" size="lg">
          Total Cracks Volume: 230 L
        </Badge>
      </Flex>
      <CracksVolumeTable />
    </>
  );
}
