import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addCommentFormValidation } from "./../utils/validation/AddCommentFormValidation";
import { addNewComment } from "./../utils/functions/AddNewComment";
import { FormProps, FormValues } from "../shared/types/FormTypes";

export const AddCommentForm = ({ photoId }: FormProps): JSX.Element => {
  const initialValues: FormValues = {
    userName: "",
    text: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addCommentFormValidation}
      onSubmit={(values, actions) => addNewComment(photoId, values, actions)}
    >
      <Form className="addCommentForm">
        <div className="formInput">
          <Field name="userName" type="text" placeholder="Your Name" />
          <strong className="error">
            <ErrorMessage name="userName" />
          </strong>
        </div>

        <div className="formInput">
          <Field name="text" type="text" placeholder="Your Comment" />
          <strong className="error">
            <ErrorMessage name="text" />
          </strong>
        </div>

        <button type="submit" className="addCommentButton">
          Leave comment
        </button>
      </Form>
    </Formik>
  );
};
