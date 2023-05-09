import Alert from "@mui/material/Alert/Alert";
import { Formik } from "formik";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { signUp, User } from "@/api/services/auth";
import Button from "@/components/Button/Button";
import CheckboxField from "@/components/CheckboxField/CheckboxField";
import InputField from "@/components/InputField/InputField";
import { handleFormikSubmission } from "@/helpers/forms";
import AuthLayout from "@/layouts/AuthLayout";
import { awaiter } from "@/utils/common";

function RegisterPage() {
  const navigate = useNavigate();
  const [t] = useTranslation("common");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleRegister({ email, password, fullName }: User) {
    setIsSubmitting(true);
    setError(null);

    await awaiter(1500);
    await signUp({ fullName, email, password })
      .then(() => {
        setError(null);
        navigate("/auth/login");
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <AuthLayout
      title={t("register")}
      description="Let's catch up the latest"
    >
      {error && (
        <Alert
          className="mb-8"
          severity="error"
        >
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          termsAndConditions: false,
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().min(2).required().label(t("fullName")),
          email: Yup.string().email().required().label(t("email")),
          password: Yup.string().min(6).required().label(t("password")),
          passwordConfirmation: Yup.string()
            .required()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .label(`${t("password")} (${t("repeat")})`),
          termsAndConditions: Yup.bool().oneOf([true], "Field must be checked"),
        })}
        onSubmit={() => {}}
      >
        {formik => {
          const { values, validateForm, setTouched } = formik;

          return (
            <form
              className="grid w-full grid-cols-1 gap-4"
              noValidate
              onSubmit={async e => {
                e.preventDefault();

                handleFormikSubmission(
                  e.currentTarget,
                  { validateForm, setTouched },
                  async () => {
                    await handleRegister({
                      email: values.email,
                      password: values.password,
                      fullName: values.fullName,
                    });
                  }
                );
              }}
            >
              <InputField
                name="fullName"
                label={t("fullName")}
                required
              />
              <InputField
                name="email"
                label={t("email")}
                type="email"
                required
              />
              <InputField
                name="password"
                label={t("password")}
                type="password"
                required
              />
              <InputField
                name="passwordConfirmation"
                label={`${t("password")} (${t("repeat")})`}
                type="password"
                toggleable={false}
                required
              />
              <CheckboxField
                name="termsAndConditions"
                label={
                  <Fragment>
                    I agree to the <a href="#">terms</a> and{" "}
                    <a href="#">conditions</a>
                  </Fragment>
                }
                required
              />
              <Button
                size="large"
                type="submit"
                className="h-[56px] text-base"
                loading={isSubmitting}
              >
                {t("register")}
              </Button>
            </form>
          );
        }}
      </Formik>

      <div className="text-center">
        <p>Don&apos;t you have an account?</p>
        <Link to="/auth/login">{t("login")}</Link>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;
