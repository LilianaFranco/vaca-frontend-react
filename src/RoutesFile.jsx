import React from "react";
import { Route, Routes } from "react-router-dom";
import ExpensesPage from "src/pages/expenses/ExpensesPage";
import FriendsPage from "src/pages/friends/FriendsPage";
import GroupsPageContainer from "src/pages/groups/GroupsPage.container";
import GroupDetailPageContainer from "./pages/groups/GroupDetailPage.container";
import SignUpPageContainer from "./pages/signUp/SignUpPage.container";
import LogInPageContainer from "src/pages/logIn/LogInPage.container";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPageContainer />} />
      <Route path="/login" element={<LogInPageContainer />} />
      <Route path="/groups" element={<GroupsPageContainer />} />
      <Route path="/groups/:id" element={<GroupDetailPageContainer />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/expenses" element={<ExpensesPage />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default RoutesFile;
