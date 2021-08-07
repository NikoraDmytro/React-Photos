import * as Yup from "yup";

export const addCommentFormValidation = Yup.object({
  userName: Yup.string()
    .max(20, "Too long!")
    .required("You must insert your name!"),
  text: Yup.string()
    .max(100, "Too long!")
    .required("You must insert some text!"),
});
