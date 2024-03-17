import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/signUp/SignUpPage/";
import LogInPage from "./pages/logIn/LogInPage";
import ExpensesPage from "./pages/expenses/ExpensesPage";
import FriendsPage from "./pages/friends/FriendsPage";
import GroupsPage from "./pages/groups/GroupsPage";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/expenses" element={<ExpensesPage />} />
    </Routes>
  );
};

export default RoutesFile;
