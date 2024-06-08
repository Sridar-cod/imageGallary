import React, { useState } from "react";

const ImgCard = ({ photo, loader }) => {
  const [isLike, setIsLike] = useState(false);

  const handleLike = (id) => {
    if(id===photo.id)
    setIsLike(!isLike);
  };

  const imageUrl = photo.src.medium;
  const imgAlt = photo.alt;
  const color = photo.avg_color;
  const clikedBy = photo.photographer;
  const clikedByUrl = photo.photographer_url;
  const imgRedirect = photo.url;

  const likeIcon = isLike ? "./assets/liked.png" : "./assets/like.png";
  console.log(photo, "asf");

  const handleDownload = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${imgAlt}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="imgDiv"
      key={photo.id}
      style={{ backgroundColor: `${color}` }}
    >
      {loader ? (
        <img src="./assets/loader.gif" alt="Loading..." />
      ) : (
        <>
          <a href={imgRedirect}>
            <img
              src={imageUrl}
              alt={imgAlt}
              loading="lazy"
              className="imgDiv__mainImg"
            />
          </a>

          <div
            className="imgDiv__like d-flex justify-content-center align-items-center"
            onClick={()=>handleLike(photo.id)}
          >
            <img src={likeIcon} alt="Like" width="20px" />
          </div>
          <a href={clikedByUrl} target="black">
            <div className="imgDiv__clikedBy">
              <small>Clicked by</small>

              <b>{clikedBy}</b>
            </div>
          </a>

          <div
            className="imgDiv__download"
            onClick={() => handleDownload(imageUrl)}
          >
            <b>Download</b>
          </div>
        </>
      )}
    </div>
  );
};

export default ImgCard;
