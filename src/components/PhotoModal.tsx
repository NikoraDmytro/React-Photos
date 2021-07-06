import React from "react";
import "./PhotoModal.scss";

interface PhotoModalProps {
  PhotoId: number;
}

export const PhotoModal = ({
  PhotoId,
}: PhotoModalProps): JSX.Element | null => {
  if (PhotoId < 0) {
    return null;
  }

  return (
    <div className="FixedLayout">
      <div className="ModalWindow">
        <h1>{PhotoId}</h1>
      </div>
    </div>
  );
};
