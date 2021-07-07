import { PhotoInfo } from "../../shared/types/PhotosTypes";
import axios from "axios";

const address = "https://boiling-refuge-66454.herokuapp.com/images/";

export const getPhotoInfo = async (
  id: number
): Promise<PhotoInfo | undefined> => {
  try {
    const response = await axios.get(address + id);

    const photoInfo: PhotoInfo = {
      id: response.data.id,
      url: response.data.url,
      Comments: response.data.comments,
    };

    return photoInfo;
  } catch (err) {
    console.log(err);
  }
};
