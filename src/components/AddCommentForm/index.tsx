import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { addCommentFormValidation } from "../../utils/validation/AddCommentFormValidation";
import { addNewComment } from "../../utils/functions/AddNewComment";
import { FormValues } from "../../shared/types/FormTypes";
import { PhotoIdContext } from "../../App";

import "./AddCommentForm.scss";
import { InputField } from "./InputField";

export const AddCommentForm = (): JSX.Element => {
  const photoId = useContext(PhotoIdContext);

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
        <InputField name="userName" placeholder="Your Name" />

        <InputField name="text" placeholder="Your Comment" />

        <button type="submit" className="addCommentButton">
          Leave comment
        </button>
      </Form>
    </Formik>
  );
};
