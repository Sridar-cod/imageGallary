import './App.css';
import Header from './components/Header';
import Content from './components/Content'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")
  
  return (
    <>
      <Header setSearch={setSearch} />
      <Content search={search} />
    </>
  );
}

export default App;
