import { Helmet } from "react-helmet";
import MainTitle from "../../design-system/components/MainTitle";
import DistanceTable from "../DistanceTable";
import { Badge, Flex } from "@mantine/core";
import AreaTimeFilter from "../../design-system/components/AreaTimeFilter";

export default function Distance() {
  //   const color = usePrimaryColorHex();
  const handleDistanceFilter = (values: any) => {
    // Make API request specific to this component
    console.log(values);
  };

  return (
    <>
      <Helmet>
        <title>Distance</title>
      </Helmet>
      <MainTitle title="Distance" />
      <AreaTimeFilter onFilter={handleDistanceFilter} />
      <Flex justify="center" my="md">
        <Badge color="green" variant="light" size="lg">
          Total Distance: 300 Km
        </Badge>
      </Flex>
      <DistanceTable />
    </>
  );
}
