import axios from "axios";

const address = "https://boiling-refuge-66454.herokuapp.com/images";

interface Photos {
  id: number;
  url: string;
}

export const getPhotos = async (): Promise<Photos[] | undefined> => {
  try {
    const response = await axios.get(address);

    const Photos: Photos[] = response.data;

    return Photos;
  } catch (err) {
    console.log(err);
  }
};
