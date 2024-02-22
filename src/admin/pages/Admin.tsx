import { Tabs } from "@mantine/core";
import { Helmet } from "react-helmet";
import AdminsList from "../components/AdminsList/AdminsList";
import AddAdminAccount from "../components/AddAdminAccount";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <Tabs defaultValue="admins">
        <Tabs.List grow mb="md">
          <Tabs.Tab value="admins">Admins</Tabs.Tab>
          <Tabs.Tab value="addAdmin">Add Admin Account</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="admins">
          <AdminsList />
        </Tabs.Panel>

        <Tabs.Panel value="addAdmin">
          <AddAdminAccount />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
