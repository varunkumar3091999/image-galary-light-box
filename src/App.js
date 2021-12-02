import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);
  const [imageToShow, setImageToShow] = useState();

  useEffect(() => {
    if (images.length < 12) {
      const tempImages = [
        ...images,
        "https://picsum.photos/1000/1000?random=" + count,
      ];
      setImages(tempImages);
      setCount(count + 1);
      console.log("here");
    }
    //eslint-disable-next-line
  }, [images]);

  const openLightBox = () => {
    setShowLightBox(true);
  };

  return (
    <div
      className={"p-3 " + showLightBox ? "overflow-hidden" : "overflow-scroll"}
    >
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div classname="shadow-lg mx-0 mb-10 ">
            <img
              src={img}
              alt="random"
              key={i}
              onClick={() => {
                openLightBox();
                setImageToShow(i);
              }}
            />
          </div>
        ))}
      </div>

      {showLightBox ? (
        <div className="text-white fixed z-10 h-full w-full object-cover flex justify-center items-center pt-10 top-0 left-0 bg-white bg-opacity-50 w-full mx-auto overflow-y-hidden">
          <button
            onClick={() => {
              if (imageToShow > 0) setImageToShow(imageToShow - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </button>
          <img
            src={images[imageToShow]}
            alt="random"
            onClick={() => setShowLightBox(false)}
            className="h-11/12 w-1/2 mx-10 object-cover	"
          />
          <button
            onClick={() => {
              if (imageToShow < 11) setImageToShow(imageToShow + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
