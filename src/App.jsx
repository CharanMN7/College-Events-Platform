import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./screens/eventPage/EventPage";
import Dashboard from "./screens/admin/Dashboard";
import Home from "./screens/home/Home";
import CreateEvent from "./screens/theEvent/CreateEvent";
import Login from "./forms/Login";
import ViewEvent from "./screens/admin/ViewEvent";
import { useState } from "react";
import LoginContext from "./utils/LoginContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <LoginContext.Provider
        value={{
          loginStatus: [isLoggedIn, setIsLoggedIn],
          theToken: [token, setToken],
        }}
      >
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
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
