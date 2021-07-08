import React from "react";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import { Comment } from "../shared/types/PhotosTypes";
import { uuid } from "uuidv4";
import { AddCommentFormValidation } from "./../utils/validation/AddCommentFormValidation";

export const AddCommentForm = (): JSX.Element => {
  const initialValues: Comment = {
    id: uuid(),
    name: "",
    text: "",
    date: 0,
  };

  const onSubmit = (
    values: Comment,
    { setSubmitting, resetForm }: FormikHelpers<Comment>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddCommentFormValidation}
      onSubmit={onSubmit}
    >
      <Form className="AddCommentForm">
        <div className="FormInput">
          <Field name="name" type="text" placeholder="Your Name" />
          <strong className="Error">
            <ErrorMessage name="name" />
          </strong>
        </div>

        <div className="FormInput">
          <Field name="text" type="text" placeholder="Your Comment" />
          <strong className="Error">
            <ErrorMessage name="text" />
          </strong>
        </div>

        <button type="submit" className="AddCommentButton">
          Leave comment
        </button>
      </Form>
    </Formik>
  );
};
