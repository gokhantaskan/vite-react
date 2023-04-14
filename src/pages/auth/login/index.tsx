import Button from "@mui/material/Button/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputField from "@/components/InputField/InputField";
import AuthLayout from "@/layouts/AuthLayout";

function LoginPage() {
  return (
    <AuthLayout
      title="Login"
      description="Welcome back"
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required().label("E-mail"),
          password: Yup.string().min(6).required().label("Password"),
        })}
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}
      >
        <Form className="grid w-full grid-cols-1 gap-4">
          <InputField
            name="email"
            label="E-mail"
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            helperText="Helper text about the password field"
          />
          <Button
            size="large"
            type="submit"
            className="h-[56px] text-base"
          >
            Login
          </Button>
        </Form>
      </Formik>
    </AuthLayout>
  );
}

export default LoginPage;
