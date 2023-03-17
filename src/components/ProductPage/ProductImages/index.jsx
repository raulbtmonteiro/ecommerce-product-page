import { useEffect, useRef, useState, memo } from "react";
import leftarrow from "../../../assets/images/leftArrow.svg";
import rightarrow from "../../../assets/images/rightArrow.svg";
import {
  Images,
  DisplayImg,
  LeftArrow,
  RightArrow,
  ThumbnailDisplay
} from "./styles";

export const ProductImages = memo(({product}) => {
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

  return(
    <Images>
      <LeftArrow onClick={() => previousImage()}>
        <img src={leftarrow} alt="Seta seletora da foto anterior." />
      </LeftArrow>
      <DisplayImg
        src={product.images[imageNumber]}
        alt="Imagem do produto"
        ref={displayRef}
      />
      <RightArrow onClick={() => nextImage()}>
        <img src={rightarrow} alt="Seta seletora da próxima foto." />
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
  )
});