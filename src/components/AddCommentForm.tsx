import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Comment, FormProps } from "../shared/types/PhotosTypes";
import { AddCommentFormValidation } from "./../utils/validation/AddCommentFormValidation";
import { AddNewComment } from "./../utils/functions/AddNewComment";

export const AddCommentForm = ({ photoId }: FormProps): JSX.Element => {
  const initialValues: Comment = {
    id: "",
    name: "",
    text: "",
    date: 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddCommentFormValidation}
      onSubmit={(values, actions) => AddNewComment(photoId, values, actions)}
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
