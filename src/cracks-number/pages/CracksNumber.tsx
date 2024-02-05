import { Helmet } from "react-helmet";
import MainTitle from "../../design-system/components/MainTitle";
import { Badge, Flex } from "@mantine/core";
import AreaTimeFilter from "../../design-system/components/AreaTimeFilter";
import CracksNumberTable from "../components/CracksNumberTable";

export default function CracksNumber() {
  //   const color = usePrimaryColorHex();
  const handleRunningHoursFilter = (values: any) => {
    // Make API request specific to this component
    console.log(values);
  };

  return (
    <>
      <Helmet>
        <title>Cracks Number</title>
      </Helmet>
      <MainTitle title="Cracks Number" />
      <AreaTimeFilter onFilter={handleRunningHoursFilter} />
      <Flex justify="center" my="md">
        <Badge color="green" variant="light" size="lg">
          Total Cracks Number: 100
        </Badge>
      </Flex>
      <CracksNumberTable />
    </>
  );
}
