import axios from "axios";
import { Photo } from "../../shared/types/PhotosTypes";

const address = "https://boiling-refuge-66454.herokuapp.com/images";

export const getPhotos = async (): Promise<Photo[] | undefined> => {
  try {
    const response = await axios.get(address);

    const Photos: Photo[] = response.data;

    return Photos;
  } catch (err) {
    console.log(err);
  }
};
