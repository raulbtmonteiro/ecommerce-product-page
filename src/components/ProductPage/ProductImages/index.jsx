import { useEffect, useRef, useState, memo } from "react";
import leftarrow from "../../../assets/images/leftArrow.svg";
import rightarrow from "../../../assets/images/rightArrow.svg";
import {
  Images,
  DisplayImg,
  LeftArrow,
  RightArrow,
  ThumbnailDisplay,
} from "./styles";

export const ProductImages = memo(({ product }) => {
  const displayRef = useRef();
  const imgListRef = useRef();
  const [imageNumber, setImageNumber] = useState(0);

  const selectImage = (e) => {
    for (var i = 0; i < imgListRef.current.children.length; i++) {
      imgListRef.current.children[i].id = "";
    }
    e.target.id = "selectedImg";
    displayRef.current.src = e.target.src;
  };

  useEffect(() => {
    imgListRef.current.children[0].id = "selectedImg";
  }, []);

  const nextImage = () => {
    if (imageNumber < product.images.length - 1) {
      setImageNumber((prevState) => prevState + 1);
    }
  };

  const previousImage = () => {
    if (imageNumber > 0) {
      setImageNumber((prevState) => prevState - 1);
    }
  };

  return (
    <Images>
      <LeftArrow
        onClick={() => previousImage()}
        onKeyDown={() => previousImage()}
        isDisabled={imageNumber === 0}
        role="button"
        aria-label="Imagem anterior"
        tabIndex={0}
      >
        <img src={leftarrow} aria-hidden />
      </LeftArrow>
      <DisplayImg
        src={product.images[imageNumber]}
        alt="Imagem do produto"
        ref={displayRef}
        fetchpriority="high"
      />
      <RightArrow
        onClick={() => nextImage()}
        onKeyDown={() => nextImage()}
        isDisabled={imageNumber === product.images.length - 1}
        role="button"
        aria-label="Próxima imagem"
        tabIndex={0}
      >
        <img src={rightarrow} aria-hidden />
      </RightArrow>
      <ThumbnailDisplay ref={imgListRef}>
        {product.images.map((img) => {
          return (
            <img
              src={img}
              alt="Imagem do produto"
              onClick={(e) => selectImage(e)}
              key={Math.random()}
            />
          );
        })}
      </ThumbnailDisplay>
    </Images>
  );
});
