import { useState, useEffect } from "react";
import { Photo } from "../../shared/types/PhotosTypes";
import { getPhotos } from "./../functions/getPhotos";

export const usePhotos = (): Photo[] => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getPhotos();

        setPhotos(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, []);

  return photos;
};
