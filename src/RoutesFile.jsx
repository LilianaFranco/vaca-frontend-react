import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./components/pages/signUp/SignUpPage";
import LogInPage from "./components/pages/logIn/LogInPage";
import ExpensesPage from "./components/pages/expenses/ExpensesPage";
import FriendsPage from "./components/pages/friends/FriendsPage";
import GroupsPage from "./components/pages/groups/GroupsPage";
import GroupsPageContainer from "./components/pages/groups/GroupsPage.container";
import GroupDetail from "./components/pages/groups/GroupDetail";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/groups" element={<GroupsPageContainer />} />
      <Route path="/groups/:id" element={<GroupDetail />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/expenses" element={<ExpensesPage />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default RoutesFile;
