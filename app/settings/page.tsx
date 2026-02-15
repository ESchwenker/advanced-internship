"use client";

import Sidebar from "@/app/dashboard/Sidebar";
import Header from "@/app/dashboard/Header";
import { useAuth } from "@/context/AuthContext";

export default function SettingsPage(){

  const { user } = useAuth();

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard__main">

        <Header />

        <div className="settings">

          <h1 className="settings__title">Settings</h1>


          <div className="settings__section">

            <div className="settings__label">
              Your Subscription plan
            </div>

            <div className="settings__value">
              premium
            </div>

          </div>

          <div className="settings__section">

            <div className="settings__label">
              Email
            </div>

            <div className="settings__value">
              {user?.email || "demo@email.com"}
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}
