import React, { useEffect, useState } from "react";
import { getPhotos } from "./utils/functions/getPhotos";
import "./App.scss";

interface Photos {
  id: number;
  url: string;
}

function App(): JSX.Element {
  const [Photos, setPhotos] = useState<Photos[] | undefined>();

  useEffect(() => {
    const loadData = async () => {
      const data = await getPhotos();
      setPhotos(data);
    };

    console.log("too much")!;
    loadData();
  });

  if (typeof Photos === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      {Photos?.map((photo) => (
        <img key={photo.id} src={photo.url} alt="Not Found" />
      ))}
    </div>
  );
}

export default App;
