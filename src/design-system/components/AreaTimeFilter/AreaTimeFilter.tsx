import { Button, Flex, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconFilter } from "@tabler/icons-react";
import { useFormik } from "formik";

export default function AreaTimeFilter({ onFilter }: { onFilter: any }) {
  const formik = useFormik({
    initialValues: {
      startDate: null,
      endDate: null,
      area: "",
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      // resetForm();
      onFilter(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex wrap="wrap" align="center" gap="md" mb="xl">
          <DateInput
            clearable
            label="Start Date"
            placeholder="Start Date"
            name="startDate"
            id="startDate"
            onChange={(date) => formik.setFieldValue("startDate", date)}
            onBlur={formik.handleBlur}
            value={formik.values.startDate}
          />
          <DateInput
            clearable
            label="End Date"
            placeholder="End Date"
            name="endDate"
            onChange={(date) => formik.setFieldValue("endDate", date)}
            onBlur={formik.handleBlur}
            value={formik.values.endDate}
          />
          <Select
            clearable
            label="Area"
            name="area"
            placeholder="Pick value"
            data={["Badr", "Albour", "Elshrouq"]}
            onChange={(value) => formik.setFieldValue("area", value)}
            onBlur={formik.handleBlur}
            value={formik.values.area}
          />
          <Button
            type="submit"
            mt="1.5rem"
            variant="light"
            rightSection={<IconFilter size="1.3rem" />}
          >
            Filter
          </Button>
        </Flex>
      </form>
    </>
  );
}
