import axios from "axios";
import { FormikHelpers } from "formik";
import { Comment } from "../../shared/types/PhotosTypes";
import { PhotoInfoStore } from "./../../stores/PhotosInfoStore";
import { uuid } from "uuidv4";

const address = "https://boiling-refuge-66454.herokuapp.com/images/";

export const AddNewComment = async (
  photoId: number,
  values: Comment,
  actions: FormikHelpers<Comment>
) => {
  try {
    const response = await axios.post(address + photoId + "/comments", {
      name: values.name,
      comment: values.text,
    });

    if (response)
      PhotoInfoStore.AddNewComment(
        {
          name: values.name,
          text: values.text,
          id: uuid(),
          date: Date.now(),
        },
        photoId
      );

    actions.setSubmitting(false);
    actions.resetForm();
  } catch (err) {
    console.log(err);
  }
};
