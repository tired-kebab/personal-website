import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { Outlet } from "react-router";
import Modal from "./components/Navbar/Modal/index";
import Footer from "./components/Footer/index";

function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <header>
        <Navbar isModal={isModal} setIsModal={setIsModal} />
      </header>
      <main>
        <Outlet />
      </main>
      {isModal ? <Modal setIsModal={setIsModal} /> : null}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
