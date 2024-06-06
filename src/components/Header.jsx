import React from 'react'

const Header = ({setSearch}) => {
  return (
    <>
      <div className="header d-flex justify-content-between align-items-center p-3">
        <div className="header__logo">
          <img src="./assets/logo-1.png" alt="" width={'40px'}/>
        </div>
        <div className="header__search">
          <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className="header__addImg">
          <img src="./assets/photo.png" alt="" width={'40px'}/>
        </div>
      </div>
    </>
  )
}

export default Header