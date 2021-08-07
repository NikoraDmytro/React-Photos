import { flow, makeAutoObservable } from "mobx";
import { PhotoData, Comment } from "../shared/types/PhotosTypes";
import { getPhotoData } from "../utils/functions/getPhotoData";

class Photos {
  photos: { [id: number]: PhotoData };

  constructor() {
    this.photos = {};
    this.loadPhotoData = this.loadPhotoData.bind(this);
    makeAutoObservable(this);
  }

  loadPhotoData = flow(function* (
    this: Photos,
    id: number
  ): Generator<Promise<PhotoData>, void, PhotoData> {
    try {
      const photoData = yield getPhotoData(id);

      this.photos[id] = photoData;
    } catch (err) {
      console.log(err);
    }
  });

  addNewComment(comment: Comment, photoId: number) {
    const photo = this.photos[photoId];
    photo.comments.push(comment);

    this.photos[photoId] = photo;
  }
}

export const PhotosStore = new Photos();
