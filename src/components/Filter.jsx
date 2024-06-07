import React, { useState } from 'react';

const ImgCard = ({ id, search }) => {
  const [isLoading, setLoading] = useState(true);
  const [isLike, setIsLike] = useState(false);

  const loader = () => {
    setLoading(false);
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  const imageUrl = `https://source.unsplash.com/random/300x300/?${search}?${id}`;
  const likeIcon = isLike ? './assets/liked.png' : './assets/like.png';

  const handleDownload = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${search}_${id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="imgDiv">
      {isLoading ? <img src='./assets/loader.gif' /> : null}
      <img
        src={imageUrl}
        alt={search}
        loading="lazy"
        onLoad={loader}
      />
      <div className="imgDiv__like d-flex justify-content-center align-items-center" onClick={handleLike}>
        <img src={likeIcon} alt="Like" width="20px" />
      </div>
      <div className="imgDiv__download" onClick={() => handleDownload(imageUrl)}>
        <b>Download</b>
      </div>
    </div>
  );
};

export default ImgCard;

