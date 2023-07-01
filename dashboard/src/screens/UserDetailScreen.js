import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import UserDetail from "../components/users/UserDetail";

const UserInfo = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <UserDetail/>
      </main>
    </>
  );
};

export default UserInfo;
