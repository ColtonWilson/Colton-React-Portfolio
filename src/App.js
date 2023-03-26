//Layout skeleton code provided in class
import React, { useState } from "react";
import Header from "./components/header.js";
import Nav from "./components/nav.js";
import Page from "./Page/index.js";
import Footer from "./components/footer.js";

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