import { Helmet } from "react-helmet";
import MainTitle from "../../design-system/components/MainTitle";
import { Badge, Flex } from "@mantine/core";
import AreaTimeFilter from "../../design-system/components/AreaTimeFilter";
import SealantVolumeTable from "../components/SealantVolumeTable";

export default function SealantVolume() {
  //   const color = usePrimaryColorHex();
  const handleSealantVolumeFilter = (values: any) => {
    // Make API request specific to this component
    console.log(values);
  };

  return (
    <>
      <Helmet>
        <title>Sealant Volume</title>
      </Helmet>
      <MainTitle title="Sealant Volume" />
      <AreaTimeFilter onFilter={handleSealantVolumeFilter} />
      <Flex justify="center" my="md">
        <Badge color="green" variant="light" size="lg">
          Total Sealant Volume: 1000 L
        </Badge>
      </Flex>
      <SealantVolumeTable />
    </>
  );
}
