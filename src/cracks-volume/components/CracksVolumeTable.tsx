import { Paper, Table } from "@mantine/core";

export default function CracksVolumeTable() {
  const elements = [
    {
      id: 1,
      date: "22/1/2012",
      area: "Elshrouq",
      crackVolume: 50,
    },
    {
      id: 2,
      date: "6/1/2015",
      area: "Badr",
      crackVolume: 90,
    },
    {
      id: 3,
      date: "30/1/2023",
      area: "Albour",
      crackVolume: 10,
    },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.id} ta="center">
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.area}</Table.Td>
      <Table.Td>{element.crackVolume}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Paper shadow="md" radius="md" p="md" mb="xl">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta="center">Date</Table.Th>
              <Table.Th ta="center">Area</Table.Th>
              <Table.Th ta="center">Crack Volume</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Paper>
    </>
  );
}
