import React, { useState } from "react";
import "./App.scss";
import { usePhotos } from "./utils/hooks/usePhotos";
import { PhotoModal } from "./components/PhotoModal";

function App(): JSX.Element {
  const Photos = usePhotos();
  const [PhotoId, setPhotoId] = useState(-1);

  if (typeof Photos === "undefined") {
    return <h1>Loading</h1>;
  }

  const selectPhoto = (id: number) => {
    setPhotoId(id);
  };

  return (
    <div className="App">
      <PhotoModal PhotoId={PhotoId} />

      {Photos?.map((photo) => (
        <img
          onClick={() => selectPhoto(photo.id)}
          key={photo.id}
          src={photo.url}
          alt="Not Found"
        />
      ))}
    </div>
  );
}

export default App;
