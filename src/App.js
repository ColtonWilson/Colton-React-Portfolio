//Layout skeleton code provided in class
import React, { useState } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Page from "./Page/index";
import Footer from "./components/footer";

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    {name: "portfolio"},
    {name: "contact"},
    {
      name: "resume"
    }
  ]);


const [currentPage, setCurrentPage] = useState(pages[0]);

return(
  <div>
    <Header>
      <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      ></Nav>
    </Header>
    <main>
      <Page currentPage={currentPage}></Page>
    </main>
    <Footer />
  </div>
);
}

export default App;