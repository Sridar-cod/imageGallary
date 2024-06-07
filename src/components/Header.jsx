import React, { useState } from 'react'

const Header = ({ setSearch }) => {
  const [innerSearch,setInnerSearch] = useState("")

  const handleSearch = () => {
    setSearch(innerSearch)
    
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
           <img src="./assets/logo-2.png" alt="" width={'50px'}/> 
        </div>
      </div>
    </>
  )
}

export default Header