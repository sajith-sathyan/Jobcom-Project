import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LobbyPage from "./pages/user/lobbyPage";
import RoomPage from "./componet/room-page/RoomPage";
import RegisterPage from "./pages/user/registerPage";
import LoginPage from "./pages/user/loginPage";
import HomePage from "./pages/user/homePage";
import HashTagPage from "./pages/user/hashTagPage";
import ResumeFormPage from "./pages/user/resumeFormPage";
import JobSearch from "./pages/user/jobSearch";
import ResumePage from "./pages/user/resumePage";
import FourNotFour from "./pages/user/fourNotFour";
import UserDetiailsPage from "./pages/admin/userDetiails";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/admin/dashboard";
import MockInterview from "./pages/admin/mockInterview";
import ResumeSales from "./pages/admin/resumeSales";
import Tutorial from "./pages/user/tutorial";
import Accounts from "./pages/user/accounts";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Routes>
        {/* <Route path="*" element={<FourNotFour/>} /> */}
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search-jobs" element={<JobSearch />} />
        <Route path="/" element={<HashTagPage />} />
        <Route path="/create-resume" element={<ResumePage />} />
        <Route path="/free-resume" element={<ResumeFormPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/admin/user-detials" element={<UserDetiailsPage />} />

        <Route
          path="/admin/mock-interview-detials"
          element={<MockInterview />}
        />
        <Route path="/admin/resume-sales-detials" element={<ResumeSales />} />
      </Routes>
    </div>
  );
}

export default App;
