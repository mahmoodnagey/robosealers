import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import { logIn } from "../slice/user-slice";
import { IconLogout } from "@tabler/icons-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-simple-toasts";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(logIn());
      navigate("/home");
      toast(
        <div
          style={{
            backgroundColor: "#00AFAF",
            padding: "1rem",
            color: "white",
            border: "none",
            borderRadius: ".5rem",
          }}
        >
          {`Hello ${values.username}.`}
        </div>,
        {
          position: "top-right",
        }
      );

      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex direction="column" gap="md" mt="md">
          <TextInput
            id="username"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <Text c="red">{formik.errors.username}</Text>
          ) : null}
          <PasswordInput
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Text c="red">{formik.errors.password}</Text>
          ) : null}

          <Button w="fit-content" type="submit">
            <Flex align="center" gap=".4rem">
              <Text>Log in</Text>
              <IconLogout />
            </Flex>
          </Button>
        </Flex>
      </form>
    </>
  );
}
