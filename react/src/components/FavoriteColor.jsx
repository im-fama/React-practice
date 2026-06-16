import { useState } from "react";
import '../css/FavoriteColor.css';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is <span style={{ color }}>{color}</span>!</h1>
      <button
        id='blue-btn'
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        id='red-btn'
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        id='pink-btn'
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        id='green-btn'
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

export default FavoriteColor;