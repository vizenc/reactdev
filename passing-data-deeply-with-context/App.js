import { useState } from "react";
import { useContext } from "react";
import { places } from "./data.js";
import { getImageUrl } from "./utils.js";
import { ImageSizeContext } from "./Context.js";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <ImageSizeContext value={isLarge ? 150 : 100}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext>
  );
}

function List() {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          <Place place={place} />
        </li>
      ))}
    </ul>
  );
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />;
}
