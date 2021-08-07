import { PhotoData } from "../../shared/types/PhotosTypes";
import axios from "axios";

const url = "https://boiling-refuge-66454.herokuapp.com/images/";

export const getPhotoData = async (id: number): Promise<PhotoData> => {
  try {
    const response = await axios.get<PhotoData>(url + id);

    const data: PhotoData = {
      id: response.data.id,
      url: response.data.url,
      comments: response.data.comments,
    };

    return data;
  } catch (err) {
    throw err;
  }
};
