import React, { useState } from "react";
import "./App.scss";
import { usePhotos } from "./utils/hooks/usePhotos";
import { PhotoModal } from "./components/PhotoModal";
import { Photo } from "./shared/types/PhotosTypes";

function App(): JSX.Element {
  const Photos = usePhotos();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | undefined>();

  const closeModal = () => setSelectedPhoto(undefined);

  if (typeof Photos === "undefined") {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      <PhotoModal photo={selectedPhoto} close={closeModal} />

      {Photos?.map((photo) => (
        <img
          onClick={() => setSelectedPhoto(photo)}
          key={photo.id}
          src={photo.url}
          alt="Not Found"
        />
      ))}
    </div>
  );
}

export default App;
