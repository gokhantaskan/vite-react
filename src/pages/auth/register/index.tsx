import Alert from "@mui/material/Alert/Alert";
import { Form as form, Formik } from "formik";
import { Fragment, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { signUp, User } from "@/api/services/auth";
import Button from "@/components/Button/Button";
import CheckboxField from "@/components/CheckboxField/CheckboxField";
import InputField from "@/components/InputField/InputField";
import AuthLayout from "@/layouts/AuthLayout";
import { awaiter, focusOnFirstInvalidInput } from "@/utils";

function RegisterPage() {
  const navigate = useNavigate();
  const [t] = useTranslation("common");
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit({ email, password, fullName }: User) {
    console.log("submitting...");

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
        {({ isSubmitting, validateForm, setTouched, values }) => (
          <form
            className="grid w-full grid-cols-1 gap-4"
            noValidate
            ref={formRef}
            onSubmit={async e => {
              e.preventDefault();
              const errors = await validateForm();

              if (Object.keys(errors).length > 0) {
                setTouched(
                  Object.fromEntries(
                    Object.keys(errors).map(key => [key, true])
                  )
                );
                setTimeout(() => focusOnFirstInvalidInput(formRef.current), 0);
                return;
              }

              handleSubmit({
                email: values.email,
                password: values.password,
                fullName: values.fullName,
              });
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
                  I agree to the <a href="javascript:void(0)">terms</a> and{" "}
                  <a href="javascript:void(0)">conditions</a>
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
        )}
      </Formik>

      <div className="text-center">
        <p>Don&apos;t you have an account?</p>
        <Link to="/auth/login">{t("login")}</Link>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;
