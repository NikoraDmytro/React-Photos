import React from "react";
import { PhotoModalProps } from "../shared/types/PhotosTypes";
import CloseButton from "../shared/img/Close.png";
import "./PhotoModal.scss";

export const PhotoModal = ({
  photo,
  close,
}: PhotoModalProps): JSX.Element | null => {
  if (typeof photo === "undefined") {
    return null;
  }

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
        <img src={photo.url} alt="Not Found" />
      </div>
    </div>
  );
};
