import React from "react";
import { PhotoModalProps } from "../shared/types/PhotosTypes";
import "./PhotoModal.scss";
import { PhotoInfoStore } from "./../stores/PhotosInfoStore";
import { observer } from "mobx-react";
import { ModalHeader } from "./ModalHeader";
import { CommentSection } from "./CommentSection";

export const PhotoModal = observer(
  ({ photoId, close }: PhotoModalProps): JSX.Element => {
    const photoInfo = PhotoInfoStore.photos[photoId];

    if (!photoInfo) {
      PhotoInfoStore.loadPhotoInfo(photoId);
    }

    const imageUrl = photoInfo && photoInfo.url;
    const Comments = photoInfo && photoInfo.Comments;

    return (
      <div className="FixedLayout">
        <div className="ModalWindow">
          <ModalHeader imageUrl={imageUrl} close={close} />

          <CommentSection Comments={Comments} />
        </div>
      </div>
    );
  }
);
