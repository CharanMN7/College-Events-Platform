import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./screens/eventPage/EventPage";
import Home from "./screens/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
