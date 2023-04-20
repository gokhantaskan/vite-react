import Alert from "@mui/material/Alert/Alert";
import { Formik } from "formik";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { signIn, User } from "@/api/services/auth";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { handleFormikSubmission } from "@/helpers/forms";
import AuthLayout from "@/layouts/AuthLayout";
import { awaiter, focusOnFirstInvalidInput } from "@/utils";

function LoginPage() {
  const navigate = useNavigate();
  const [t] = useTranslation("common");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleLogin({ email, password }: Omit<User, "fullName">) {
    setIsSubmitting(true);
    setError(null);

    await awaiter(1500);
    await signIn({ email, password })
      .then(() => {
        navigate("/", {
          replace: true,
        });
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
      title={t("login")}
      description="Welcome back"
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
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required().label(t("email")),
          password: Yup.string().min(6).required().label(t("password")),
        })}
        onSubmit={() => {}}
      >
        {formik => (
          <form
            className="grid w-full grid-cols-1 gap-4"
            noValidate
            ref={formRef}
            onSubmit={async e => {
              e.preventDefault();

              handleFormikSubmission(formRef.current, formik, async () => {
                await handleLogin(formik.values);
              });
            }}
          >
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
            <Button
              size="large"
              type="submit"
              className="h-[56px] text-base"
              loading={isSubmitting}
            >
              {t("login")}
            </Button>
          </form>
        )}
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
