"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
export default function SettingsPage(){

  const { user, plan } = useAuth();

  return (

    <>
      {/* LOGGED OUT */}
      {!user ? (

        <div className="settings settings--loggedout">

          <h1 className="settings__title">Settings</h1>

          <div className="logout__divider"></div>

          <div className="logout__description">

            <img
              src="/login.png"
              alt="login img"
              style={{maxWidth:"450px"}}
            />

            <h2 className="logout__info">
              Log in to your account to see your details.
            </h2>

            <button
              className="btn logout__btn"
              onClick={()=>window.dispatchEvent(new Event("open-login"))}
            >
              Login
            </button>

          </div>

        </div>

      ) : (

        /* NORMAL SETTINGS */

        <div className="settings">

          <h1 className="settings__title">Settings</h1>

          <div className="settings__section">
            <div className="settings__label">
              Your Subscription plan
            </div>

            <div className="settings__value">
              {plan}

              {plan==="basic" && (
                <Link href="/choose-plan">
                  <button className="btn upgrade__btn">
                    Upgrade to Premium
                  </button>
                </Link>
              )}

            </div>
          </div>

          <div className="settings__section">
            <div className="settings__label">Email</div>

            <div className="settings__value">
              {user?.email}
            </div>
          </div>

        </div>

      )}
    </>
  );
}

