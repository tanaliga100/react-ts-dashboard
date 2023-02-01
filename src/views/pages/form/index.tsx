import { Box, Button, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikProps,
  validateYupSchema,
} from "formik";
import React, { FormEvent, useState } from "react";
import * as yup from "yup";
import Header from "../../shared/Header";

const phoneRegex = /^(09|\+639)\d{9}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegex, "Please provide a valid number")
    .required("required"),
  email: yup.string().email("Invalid email").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}

const InitialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const FormComponent: React.FC = () => {
  const nonMobile = useMediaQuery("(min-width:600px)");
  // SUBMISSION HERE...
  const handleFormSubmit = (
    values: FormValues,
    {
      setSubmitting,
      setValues,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      setValues: (values: FormValues) => void;
    }
  ) => {
    console.log("VALUES", values);
    setSubmitting(false);
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    } as FormValues);
  };

  return (
    <Box m="20px">
      <Header title="CREATE_USER" subTitle="Create a new user-profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={InitialValues}
        validationSchema={userSchema}
      >
        {/* FORM HERE */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              m="10px 0 0 0"
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr)"
              sx={{
                "& > div": {
                  gridColumn: nonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px" gap="20px">
              <Button type="button" color="secondary" variant="contained">
                {" "}
                Clear Fields
              </Button>
              <Button type="submit" color="success" variant="contained">
                {" "}
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default FormComponent;

// onSubmit={(values, { setSubmitting }) => {
//   console.log({ values });
//   setSubmitting(false);
// }}
