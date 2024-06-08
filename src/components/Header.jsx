import React, { useState } from 'react'

const Header = ({ setQuery }) => {
  const [innerSearch,setInnerSearch] = useState("")

  const handleSearch = () => {
    setQuery(innerSearch)
    
  }
  return (
    <>
      <div className="header d-flex justify-content-between align-items-center p-3">
        <div className="header__logo">
          <img src="./assets/logo-1.png" alt="" width={'40px'}/>
        </div>
        <div className="header__search">
          <input type="text" placeholder='search for images' onChange={(e) => setInnerSearch(e.target.value)} />
          <img src="./assets/search.png" alt="" width={'25px'} className='header__searchIcon ' onClick={()=>handleSearch()}/>
        </div>
        <div className="header__addImg">
           <h2>Image Haven</h2>
        </div>
      </div>
    </>
  )
}

export default Header