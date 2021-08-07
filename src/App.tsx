import React, { useState } from "react";
import "./App.scss";
import { usePhotos } from "./utils/hooks/usePhotos";
import { PhotoModal } from "./components/PhotoModal";

function App(): JSX.Element {
  const photos = usePhotos();
  const [selectedPhotoId, setSelectedPhotoId] = useState<number>(-1);

  const closeModal = () => setSelectedPhotoId(-1);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape") closeModal();
  };

  return (
    <div className="app" onKeyDown={onKeyDown} tabIndex={0}>
      <PhotoModal photoId={selectedPhotoId} close={closeModal} />

      {photos.map((photo) => (
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
