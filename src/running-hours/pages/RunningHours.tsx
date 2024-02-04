import { Helmet } from "react-helmet";
import MainTitle from "../../design-system/components/MainTitle";
import { Badge, Flex } from "@mantine/core";
import AreaTimeFilter from "../../design-system/components/AreaTimeFilter";
import RunningHoursTable from "../components/RunningHoursTable";

export default function RunningHours() {
  //   const color = usePrimaryColorHex();
  const handleRunningHoursFilter = (values: any) => {
    // Make API request specific to this component
    console.log(values);
  };

  return (
    <>
      <Helmet>
        <title>Running Hours</title>
      </Helmet>
      <MainTitle title="Running Hours" />
      <AreaTimeFilter onFilter={handleRunningHoursFilter} />
      <Flex justify="center" my="md">
        <Badge color="green" variant="light" size="lg">
          Total Running Hours: 250 Hours
        </Badge>
      </Flex>
      <RunningHoursTable />
    </>
  );
}
