import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./components/contacts/contact";
import Home from "./components/home/home";
import Message from "./components/message/message";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactinfo" element={<Contacts />} />
          <Route path="/contactinfo/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
