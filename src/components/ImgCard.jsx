import React, { useState } from 'react'

const ImgCard = ({ id,search }) => {
  const [isloading,setloading] = useState(true)
  const loader = () => {
    setloading(false)
  }
  return (
    <>
      <div className="img-div">
        {isloading ? <>
          <p style={{textAlign:'center'}}>Loading</p></> : null}
          <img
            src={`https://source.unsplash.com/random/300x300/?${search}?${id}`}
            alt={search}
            loading='lazy'
            onLoad={loader}
          />
      </div>
    </>)
}

export default ImgCard