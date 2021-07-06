import { useState, useEffect } from "react";
import { getPhotos } from "./../functions/getPhotos";

interface Photos {
  id: number;
  url: string;
}

export const usePhotos = (): Photos[] | undefined => {
  const [Photos, setPhotos] = useState<Photos[] | undefined>();

  useEffect(() => {
    const loadData = async () => {
      const data = await getPhotos();

      setPhotos(data);
    };

    if (typeof Photos === "undefined") loadData();
  });

  return Photos;
};
