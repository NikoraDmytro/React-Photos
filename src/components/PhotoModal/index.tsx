import React, { useContext } from "react";
import { PhotoModalProps } from "../../shared/types/PropsTypes";
import "./PhotoModal.scss";
import { PhotosStore as Store } from "../../stores/PhotosStore";
import { observer } from "mobx-react";
import { ModalHeader } from "./ModalHeader";
import { CommentSection } from "./CommentSection";
import { PhotoIdContext } from "../../App";

export const PhotoModal = observer(
  ({ close }: PhotoModalProps): JSX.Element => {
    const photoId = useContext(PhotoIdContext);

    if (photoId === -1) return <></>;

    const photoInfo = Store.photos[photoId] || Store.loadPhotoData(photoId);

    const imageUrl = photoInfo.url;
    const comments = photoInfo.comments;

    return (
      <div className="modalLayout">
        <div className="modal">
          {imageUrl && comments ? (
            <>
              <ModalHeader imageUrl={imageUrl} close={close} />

              <CommentSection comments={comments} />
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    );
  }
);
