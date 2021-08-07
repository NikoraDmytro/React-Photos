import React from "react";
import CloseButton from "../shared/img/Close.png";

interface ModalHeaderProps {
  imageUrl: string | undefined;
  close: () => void;
}

export const ModalHeader = ({
  imageUrl,
  close,
}: ModalHeaderProps): JSX.Element => {
  if (typeof imageUrl === "undefined") return <h1> Loading</h1>;

  return (
    <header>
      <img
        src={CloseButton}
        className="closeButton"
        alt="Close"
        onClick={close}
      />
      <img className="picture" src={imageUrl} alt="Not Found" />
    </header>
  );
};
