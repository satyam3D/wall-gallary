import axios from "axios";
import  React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then((res) => {
        console.log("Getting Response: - ", res.data);
        setImgArray(res.data);
      })
      .catch((error) => {
        console.log("Got error: - ", error);
      });
  }, []);

  return (
    <div className="gallery">
      {imgArray.map((item, index) => {
        return <img key={index} src={item.urls.regular} alt="flex-gallery" />;
      })}
    </div>
  );
}