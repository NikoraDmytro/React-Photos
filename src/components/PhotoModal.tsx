import React from "react";
import { PhotoModalProps } from "../shared/types/PhotosTypes";
import "./PhotoModal.scss";
import { PhotosStore as Store } from "../stores/PhotosStore";
import { observer } from "mobx-react";
import { ModalHeader } from "./ModalHeader";
import { CommentSection } from "./CommentSection";

export const PhotoModal = observer(
  ({ photoId, close }: PhotoModalProps): JSX.Element => {
    if (photoId === -1) return <></>;

    const photoInfo = Store.photos[photoId] || Store.loadPhotoData(photoId);

    const imageUrl = photoInfo && photoInfo.url;
    const comments = photoInfo && photoInfo.comments;

    return (
      <div className="modalLayout">
        <div className="modal">
          <ModalHeader imageUrl={imageUrl} close={close} />

          <CommentSection photoId={photoId} comments={comments} />
        </div>
      </div>
    );
  }
);
