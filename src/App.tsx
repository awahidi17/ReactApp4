import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { VoteProvider } from "./context/VoteContext";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <VoteProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </VoteProvider>
  );
}
