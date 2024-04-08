import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./screens/home/Home";
import Login from "./forms/Login";
import EventPage from "./screens/eventPage/EventPage";
import Dashboard from "./screens/admin/Dashboard";
import ViewEvent from "./screens/admin/ViewEvent";
import CreateEvent from "./screens/theEvent/CreateEvent";
import LoginContext from "./utils/LoginContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const queryClient = new QueryClient({
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  });

  return (
    <BrowserRouter>
      <LoginContext.Provider
        value={{
          loginStatus: [isLoggedIn, setIsLoggedIn],
          theToken: [token, setToken],
        }}
      >
        <QueryClientProvider client={queryClient}>
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
                isLoggedIn ? <CreateEvent operation="Create" /> : <Login />
              }
            />
            <Route path="/admin/event/:id" element={<ViewEvent />} />
            {/*
             **************
             * AllEvents Route:
             * <Route path="/all-events" element={<AllEvents />} />
             *
             * update event route:
             * <Route path="/admin/event/:id/update"
             *   element={
             *     isLoggedIn ? <CreateEvent operation="Update" /> : <Login />
             *   }
             * />
             * ************
             */}
          </Routes>
        </QueryClientProvider>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
