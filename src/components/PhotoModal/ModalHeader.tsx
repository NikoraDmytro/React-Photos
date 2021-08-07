import React from "react";
import { ModalHeaderProps } from "../../shared/types/PropsTypes";

export const ModalHeader = ({
  imageUrl,
  close,
}: ModalHeaderProps): JSX.Element => {
  return (
    <header>
      <img
        src="/images/close.png"
        className="closeButton"
        alt="Close"
        onClick={close}
      />
      <img className="picture" src={imageUrl} alt="Not Found" />
    </header>
  );
};
