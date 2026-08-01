import React from "react";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import data from "./data.js";
function App() {
  const entire = data.map((file) => {
    return (
      <Header 
      key = {file.id}
      {...file}
      
       /* img1={file.img1}
        img2={file.img2}
        name={file.name}
        name2={file.name}
        date={file.date}
        googleMapsLink={file.googleMapsLink}
        Note={file.Note}
    */
         
      />
    );
  });
  return (
    <div>
      <Navbar />
      {entire}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
