import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const user = useAuth();
  //console.log(user);
  return (
    <div className="mt-20">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
