import './App.css';
import Header from './components/Header';
import Content from './components/Content'
import { useState } from 'react';
import Filter from './components/ImgModel';
import Footer from './components/Footer'
function App() {
  const [search, setSearch] = useState("")
  
  return (
    <>
      <Header setSearch={setSearch} />
      <Filter setSearch={setSearch} search={search} />
      <Content search={search} />
      <Footer />
    </>
  );
}

export default App;
