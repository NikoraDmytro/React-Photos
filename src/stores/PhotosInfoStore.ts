import { flow, makeAutoObservable } from "mobx";
import { PhotoInfo } from "../shared/types/PhotosTypes";
import { getPhotoInfo } from "./../utils/functions/getPhotoInfo";

class PhotosInfo {
  photos: { [id: number]: PhotoInfo };

  constructor() {
    this.photos = {};
    this.loadPhotoInfo = this.loadPhotoInfo.bind(this);
    makeAutoObservable(this);
  }

  loadPhotoInfo = flow(function* (
    this: PhotosInfo,
    id: number
  ): Generator<any, void, PhotoInfo> {
    try {
      const photoInfo = yield getPhotoInfo(id);

      this.photos[id] = photoInfo;
    } catch (err) {
      console.log(err);
    }
  });
}

export const PhotoInfoStore = new PhotosInfo();
