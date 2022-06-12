import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Login from "./components/auth/Login";
import RequireAuth from "./components/auth/RequireAuth";
import Menu from "./components/menu/menu";
import Schedule from "./components/schedule/schedule";
import Tests from "./components/tests/tests";
import NotFound from "./components/notFound/NotFound";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Home from "./components/home/home";
import Profile from "./components/profile/Profile";
import TestCreater from "./components/testCreate/CreateTest";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary>
        <Header setShowMenu={setShowMenu} />
        <Main>
          <Menu showMenu={showMenu} />
          <Routes>
            (// PUBLIC ROUTES)
            <Route path="/" element={<Login />} />
            (// PROTECTED ROUTES)
            <Route element={<RequireAuth />}>
              <Route path="/home" element={<Home />} />

              <Route path="/schedule" element={<Schedule />} />

              <Route path="/tests" element={<TestCreater />} />

              <Route path="/profile" element={<Profile />} />
            </Route>
            (// NOT FOUND ROUTE)
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
