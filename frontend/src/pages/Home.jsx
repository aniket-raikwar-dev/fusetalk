import React, { useState } from "react";
import {
  RiChat3Fill,
  RiChat3Line,
  RiGroupFill,
  RiGroupLine,
} from "react-icons/ri";

const Home = () => {
  const [activeTab, setActiveTab] = useState("chats");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="main-layout">
      <div className="bottom-navbar">
        <div className="nav-btn">
          <div
            className={activeTab === "chats" ? "active-tab" : "tab"}
            onClick={() => handleActiveTab("chats")}
          >
            {activeTab === "chats" ? (
              <RiChat3Fill size={18} fill="#604eff" />
            ) : (
              <RiChat3Line size={18} fill="#969696" />
            )}
          </div>
        </div>
        <div className="nav-btn">
          <div
            className={activeTab === "groups" ? "active-tab" : "tab"}
            onClick={() => handleActiveTab("groups")}
          >
            {activeTab === "groups" ? (
              <RiGroupFill size={18} fill="#604eff" />
            ) : (
              <RiGroupLine size={18} fill="#969696" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
