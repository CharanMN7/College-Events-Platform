import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./screens/eventPage/EventPage";
import Dashboard from "./screens/admin/Dashboard";
import Home from "./screens/home/Home";
import CreateEvent from "./screens/theEvent/CreateEvent";
import Login from "./forms/Login";
import ViewEvent from "./screens/admin/ViewEvent";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route
            path="/admin"
            element={isLoggedIn ? <Dashboard /> : <Login />}
          />
          <Route
            path="/admin/create-event"
            element={
              isLoggedIn ? <CreateEvent operation="create" /> : <Login />
            }
          />
          <Route path="/admin/event/:id" element={<ViewEvent />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
