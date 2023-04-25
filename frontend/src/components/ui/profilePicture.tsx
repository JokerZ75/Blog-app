import { useEffect, useState, useRef, useMemo } from 'react';
import useIsInViewport from "../../utils/observe";

const profilePicture = (userIcon: any) => {
  const [imageData, setImageData] = useState("");
  const image = useRef(null);
  const isInViewport = useIsInViewport(image);

  useMemo(() => {
    if (imageData == "") {
      const Controller = new AbortController();
      const signal = Controller.signal;
      fetch(`http://localhost:8008/images/byid/${userIcon.imageID}`, { signal })
        .then((res) => res.json())
        .then((data) => {
          setImageData(() => "data:image/png;base64," + data.base64Data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw err;
          }
        });

      return () => {
        Controller.abort();
      };
    }
  }, [isInViewport]);

  return (
    <img
      ref={image}
      className="w-24 h-24 rounded-full"
      src={imageData}
      alt="A profilePicture"
    />
  );
};

export default profilePicture;
