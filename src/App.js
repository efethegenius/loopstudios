import { useState } from "react";
import { About } from "./About";
import "./App.css";
import { Creations } from "./Creations";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modal } from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Header showModal={showModal} setShowModal={setShowModal} />
      <About />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
