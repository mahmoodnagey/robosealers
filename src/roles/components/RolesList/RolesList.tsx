import { useEffect } from "react";
import { ActionIcon, Flex, Loader, Paper, Table, Title } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  deleteRoleById,
  fetchRolesList,
  selectRolesList,
} from "../../slice/rolesListSlice";

export default function RolesList() {
  const dispatch: any = useDispatch();

  const roles = useSelector(selectRolesList);
  const loading = useSelector((state: RootState) => state.rolesList.loading);
  const removeRole = (roleId: string) => {
    dispatch(deleteRoleById(roleId));
  };

  useEffect(() => {
    dispatch(fetchRolesList());
  }, [dispatch]);

  const rows = roles?.map((role) => (
    <Table.Tr key={role._id} ta="center">
      <Table.Td>{role.name}</Table.Td>
      <Table.Td>{role.type}</Table.Td>
      <Table.Td ta="center">
        <Flex align="center" gap="md" justify="center">
          {/* <ActionIcon variant="light">
            <IconEdit size="1rem" />
          </ActionIcon> */}
          <ActionIcon
            color="red"
            variant="light"
            onClick={() => removeRole(role._id)}
          >
            <IconTrash size="1rem" />
          </ActionIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      {loading ? (
        <Flex justify="center" my="md">
          <Loader type="dots" />
        </Flex>
      ) : (
        <Paper shadow="md" radius="md" p="md" mb="xl">
          {roles?.length === 0 ? (
            <Title c="gray.7" ta="center" order={4}>
              No Roles Found
            </Title>
          ) : (
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th ta="center">Role Name</Table.Th>
                  <Table.Th ta="center">Role Type</Table.Th>
                  <Table.Th ta="center">Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          )}
        </Paper>
      )}
    </>
  );
}
