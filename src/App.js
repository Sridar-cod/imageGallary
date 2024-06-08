import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState, useEffect } from "react";
import Filter from "./components/ImgModel";
import Footer from "./components/Footer";
import { createClient } from "pexels";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("all");
  const [pageToDisplay, setPageToDisplay] = useState(1);
  const [loader, setLoader] = useState(true);

  const API_KEY = "ApCpAc8xmUvHQCbav95pIwNpFCFbzTN99H8s5O7foPJAfvQ977qcFHma";

  const client = createClient(API_KEY);

  useEffect(() => {
    setLoader(true);
    client.photos
      .search({ query, per_page: 80, page: pageToDisplay })
      .then((response) => {
        setData(response.photos);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setLoader(false); 
      });
  }, [query, pageToDisplay]);

  useEffect(() => {
    setPageToDisplay(1);
  }, [query]);

  return (
    <>
      <Header setQuery={setQuery} />
      <Filter setQuery={setQuery} query={query} />
      <Content
        setPageToDisplay={setPageToDisplay}
        pageToDisplay={pageToDisplay}
        query={query}
        data={data}
        loader={loader}
      />
      <Footer />
    </>
  );
}

export default App;
