import Button from "@mui/material/Button/Button";
// import Divider from "@mui/material/Divider/Divider";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import InputField from "@/components/InputField/InputField";
import AuthLayout from "@/layouts/AuthLayout";

function LoginPage() {
  const [t] = useTranslation("common");

  return (
    <AuthLayout
      title={t("login")}
      description="Welcome back"
    >
      {/* <Divider className="my-4">or</Divider> */}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required().label(t("email")),
          password: Yup.string().min(6).required().label(t("password")),
        })}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="grid w-full grid-cols-1 gap-4">
          <InputField
            name="email"
            label={t("email")}
            type="email"
          />
          <InputField
            name="password"
            label={t("password")}
            type="password"
          />
          <Button
            size="large"
            type="submit"
            className="h-[56px] text-base"
          >
            {t("login")}
          </Button>
        </Form>
      </Formik>
      <div className="my-4 text-center">
        <Link to="/auth/forgot-password">{t("Forgot Password?")}</Link>
      </div>
      <div className="text-center">
        <p>Don&apos;t you have an account?</p>
        <Link to="/auth/signup">{t("register")}</Link>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
