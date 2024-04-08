import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./screens/eventPage/EventPage";
import Dashboard from "./screens/admin/Dashboard";
import Home from "./screens/home/Home";
import CreateEvent from "./screens/theEvent/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route
          path="/create-event"
          element={<CreateEvent operation="Create" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
