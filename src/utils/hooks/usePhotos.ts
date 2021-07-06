import { useState, useEffect } from "react";
import { Photo } from "../../shared/types/PhotosTypes";
import { getPhotos } from "./../functions/getPhotos";

export const usePhotos = (): Photo[] | undefined => {
  const [Photos, setPhotos] = useState<Photo[] | undefined>();

  useEffect(() => {
    const loadData = async () => {
      const data = await getPhotos();

      setPhotos(data);
    };

    if (typeof Photos === "undefined") loadData();
  });

  return Photos;
};
