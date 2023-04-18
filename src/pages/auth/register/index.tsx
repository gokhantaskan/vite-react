import Button from "@mui/material/Button/Button";
import { Form, Formik } from "formik";
import { t } from "msw/lib/glossary-de6278a9";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import InputField from "@/components/InputField/InputField";
import AuthLayout from "@/layouts/AuthLayout";

function RegisterPage() {
  const [t] = useTranslation("common");

  return (
    <AuthLayout
      title={t("register")}
      description="Let's catch up the latest"
    >
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().min(2).required().label(t("fullName")),
          email: Yup.string().email().required().label(t("email")),
          password: Yup.string().min(6).required().label(t("password")),
          passwordConfirmation: Yup.string()
            .required()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .label("Password (repeat)"),
        })}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="grid w-full grid-cols-1 gap-4">
          <InputField
            name="fullName"
            label={t("fullName")}
          />
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
          <InputField
            name="passwordConfirmation"
            label={`${t("password")} (${t("repeat")})`}
            type="password"
            toggleable={false}
          />
          <Button
            size="large"
            type="submit"
            className="h-[56px] text-base"
          >
            {t("register")}
          </Button>
        </Form>
      </Formik>
      <div className="text-center">
        <p>Don&apos;t you have an account?</p>
        <Link to="/auth/login">{t("login")}</Link>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;
