import axios from "axios";
import { Photo } from "../../shared/types/PhotosTypes";

const url = "https://boiling-refuge-66454.herokuapp.com/images";

export const getPhotos = async (): Promise<Photo[]> => {
  try {
    const response = await axios.get<Photo[]>(url);

    const photos: Photo[] = response.data;

    return photos;
  } catch (err) {
    throw err;
  }
};
