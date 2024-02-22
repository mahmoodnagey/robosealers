import { useEffect, useState } from "react";
import {
  ActionIcon,
  Button,
  Flex,
  Loader,
  Paper,
  Select,
  Table,
  Title,
} from "@mantine/core";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { fetchRolesList, selectRolesList } from "../../slice/rolesListSlice";
import { useRoleActions } from "../../hook/use-roles-actions";
import { GetService } from "../../../api/services/requests-service";
import ApiRoutes from "../../../api/services/api-routes";
import ShowRole from "./ShowRole";
import { openShowRoleModal } from "../../slice/show-role-modal-slice";
import { RoleType } from "../../types";
import EditRole from "./EditRole";
import { openEditRoleModal } from "../../slice/edit-role-modal-slice";

export default function RolesList() {
  const dispatch: any = useDispatch();
  const roles = useSelector(selectRolesList);
  const loading = useSelector((state: RootState) => state.rolesList.loading);
  const { removeRole } = useRoleActions();
  const [role, setRole] = useState<RoleType>();
  const [typeValue, setTypeValue] = useState<any>("");
  const opened = useSelector(
    (state: RootState) => state.showRoleModal.showRole
  );
  const editRoleOpened = useSelector(
    (state: RootState) => state.editRoleModal.editRole
  );

  useEffect(() => {
    dispatch(fetchRolesList());
  }, [dispatch]);

  const getRole = (roleId: string) => {
    setRole(undefined);
    GetService({
      route: ApiRoutes.getRoles,
      params: {
        _id: roleId,
      },
    }).then((res) => {
      setRole(res.data.result);
    });
  };

  const rows = roles?.map((role) => (
    <Table.Tr key={role._id} ta="center">
      <Table.Td>{role.name}</Table.Td>
      <Table.Td>{role.type}</Table.Td>
      <Table.Td ta="center">
        <Flex align="center" gap="md" justify="center">
          <ActionIcon
            color="green"
            variant="light"
            onClick={() => {
              getRole(role._id);
              dispatch(openShowRoleModal());
            }}
          >
            <IconEye size="1rem" />
          </ActionIcon>
          <ActionIcon
            variant="light"
            onClick={() => {
              getRole(role._id);
              dispatch(openEditRoleModal());
            }}
          >
            <IconEdit size="1rem" />
          </ActionIcon>
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
  const handleFilterType = () => {
    dispatch(fetchRolesList(typeValue));
  };
  return (
    <>
      {loading ? (
        <Flex justify="center" my="md">
          <Loader type="dots" />
        </Flex>
      ) : (
        <>
          <Flex align="center" gap="md" mb="xl">
            <Select
              clearable
              label="Role Type"
              placeholder="Pick Type"
              data={["All", "admin", "user"]}
              value={typeValue}
              onChange={setTypeValue}
            />
            <Button mt="1.5rem" size="sm" onClick={handleFilterType}>
              Filter
            </Button>
          </Flex>
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
        </>
      )}

      {opened && <ShowRole role={role?.permissions} />}
      {editRoleOpened && role && <EditRole role={role} />}
    </>
  );
}
