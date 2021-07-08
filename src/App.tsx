import React, { useState } from "react";
import "./App.scss";
import { usePhotos } from "./utils/hooks/usePhotos";
import { PhotoModal } from "./components/PhotoModal";

function App(): JSX.Element {
  const Photos = usePhotos();
  const [selectedPhotoId, setSelectedPhotoId] = useState<number | undefined>();

  const closeModal = () => setSelectedPhotoId(undefined);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape") closeModal();
  };

  if (typeof Photos === "undefined") {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App" onKeyDown={onKeyDown} tabIndex={0}>
      {typeof selectedPhotoId !== "undefined" ? (
        <PhotoModal photoId={selectedPhotoId} close={closeModal} />
      ) : null}

      {Photos?.map((photo) => (
        <img
          onClick={() => setSelectedPhotoId(photo.id)}
          key={photo.id}
          src={photo.url}
          alt="Not Found"
        />
      ))}
    </div>
  );
}

export default App;
