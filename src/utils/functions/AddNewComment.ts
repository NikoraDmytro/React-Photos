import axios from "axios";
import { FormikHelpers } from "formik";
import { PhotosStore } from "../../stores/PhotosStore";
import { v4 as uuid } from "uuid";
import { FormValues } from "../../shared/types/FormTypes";
import { Comment } from "../../shared/types/PhotosTypes";

const url = "https://boiling-refuge-66454.herokuapp.com/images/";

export const addNewComment = async (
  photoId: number,
  formValues: FormValues,
  actions: FormikHelpers<FormValues>
) => {
  try {
    const response = await axios.post(url + photoId + "/comments", {
      name: formValues.userName,
      comment: formValues.text,
    });

    if (!response) return;

    const newComment: Comment = {
      ...formValues,
      id: uuid(),
      date: new Date(),
    };

    PhotosStore.addNewComment(newComment, photoId);

    actions.setSubmitting(false);
    actions.resetForm();
  } catch (err) {
    console.log(err);
  }
};
