"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSeedling, FaHandshake } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import PlanFAQ from "@/components/PlanFAQ";

export default function ChoosePlanPage() {
  const [selected, setSelected] = useState("yearly");
  const { upgrade } = useAuth();
  const router = useRouter();

  function handleStart() {
    const plan = selected === "yearly" ? "premium-plus" : "premium";

    upgrade(plan);
    router.push("/for-you");
  }

  return (
    <section>
      <div className="chooseHero">
        <div className="chooseHero__content">
          <h1>
            Get unlimited access to many amazing
            <br />
            books to read
          </h1>

          <p>Turn ordinary moments into amazing learning opportunities</p>

          <img src="/pricing-top.png" className="plan-img" />
        </div>
      </div>
      <div className="sticky__wrapper">
        <div className="planBenefits">
          <div className="planBenefit">
            <FiFileText className="planBenefit__icon" />
            <p>
              <strong>Key ideas in few min</strong> with many books to read
            </p>
          </div>

          <div className="planBenefit">
            <FaSeedling className="planBenefit__icon" />
            <p>
              <strong>3 million</strong> people growing with Summarist everyday
            </p>
          </div>

          <div className="planBenefit">
            <FaHandshake className="planBenefit__icon" />
            <p>
              <strong>Precise recommendations</strong> collections curated by
              experts
            </p>
          </div>
        </div>
        <div className="choosePlans">
          <h2 className="choosePlans__title">Choose the plan that fits you</h2>

          <div className="planCard__wrapper">
            <div
              className={`planCard ${selected === "yearly" ? "planCard--active" : ""}`}
              onClick={() => setSelected("yearly")}
            >
              <div className="planRadio" />
              <div>
                <h3 className="plan-title">Premium Plus Yearly</h3>
                <h1 className="plan-price">$99.99/year</h1>
                <p className="plan-trial">7-day free trial included</p>
              </div>
            </div>

            {/* OR */}
            <div className="planOr">
              <span></span>
              <p>or</p>
              <span></span>
            </div>

            <div
              className={`planCard ${selected === "monthly" ? "planCard--active" : ""}`}
              onClick={() => setSelected("monthly")}
            >
              <div className="planRadio" />
              <div>
                <h3 className="plan-title">Premium Monthly</h3>
                <h1 className="plan-price">$9.99/month</h1>
                <p className="plan-trial">No trial included</p>
              </div>
            </div>
          </div>
        </div>
        <div className="planSticky">
            <button
                className="planBtn"
                onClick={() => window.dispatchEvent(new Event("open-login"))}
                >
              {selected === "yearly"
                ? "Start your free 7-day trial"
                : "Start your first month"}
            </button>

            <p className="planFine">
              {selected === "yearly"
                ? "Cancel your trial at any time before it ends, and you won’t be charged."
                : "30-day money back guarantee, no questions asked."}
            </p>
        </div>
    
      </div>
      <PlanFAQ />

          <footer className="footer">

      <div className="footer__grid">

        <div>
          <h4>Actions</h4>
          <p>Summarist Magazine</p>
          <p>Cancel Subscription</p>
          <p>Help</p>
          <p>Contact us</p>
        </div>

        <div>
          <h4>Useful Links</h4>
          <p>Pricing</p>
          <p>Summarist Business</p>
          <p>Gift Cards</p>
          <p>Authors & Publishers</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Partners</p>
          <p>Code of Conduct</p>
        </div>

        <div>
          <h4>Other</h4>
          <p>Sitemap</p>
          <p>Legal Notice</p>
          <p>Terms of Service</p>
          <p>Privacy Policies</p>
        </div>

      </div>

      <div className="footer__copyright">
        Copyright © 2023 Summarist.
      </div>

    </footer>
    </section>
  );
}
