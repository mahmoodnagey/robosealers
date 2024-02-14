import { Paper, Table, Title } from "@mantine/core";
import { RobotData } from "../../design-system/types/operationList";

export default function SealantVolumeTable({
  elements,
}: {
  elements?: RobotData[];
}) {
  const rows = elements?.map((element) => (
    <Table.Tr key={element._id} ta="center">
      <Table.Td>{element.endDate}</Table.Td>
      <Table.Td>{element.area}</Table.Td>
      <Table.Td>{element.sealantVolume} L</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Paper shadow="md" radius="md" p="md" mb="xl">
        {elements?.length === 0 ? (
          <Title c="gray.7" ta="center" order={4}>
            No Data Found
          </Title>
        ) : (
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th ta="center">Date</Table.Th>
                <Table.Th ta="center">Area</Table.Th>
                <Table.Th ta="center">Volume</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        )}
      </Paper>
    </>
  );
}
