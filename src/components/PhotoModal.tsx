import React from "react";
import { PhotoModalProps } from "../shared/types/PhotosTypes";
import CloseButton from "../shared/img/Close.png";
import "./PhotoModal.scss";
import { PhotoInfoStore } from "./../stores/PhotosInfoStore";
import { observer } from "mobx-react";

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
          <header>
            <img
              src={CloseButton}
              className="CloseButton"
              alt="Close"
              onClick={close}
            />
          </header>

          {imageUrl ? <img src={imageUrl} alt="Not Found" /> : <h1>Loading</h1>}

          {typeof Comments !== "undefined" ? (
            <ul>
              {Comments?.map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
            </ul>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    );
  }
);
