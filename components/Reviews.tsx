"use client";

import { BsStarFill } from "react-icons/bs";
import { useState } from "react";
import LoginModal from "@/components/LoginModal"; // adjust path if needed

export default function Reviews() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <section id="reviews">
        <div className="row">
          <div className="container">

            <div className="section__title">
              What our members say
            </div>

            <div className="reviews__wrapper">

              {/* Review 1 */}
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Hanna M.</div>
                  <div className="review__stars"><BsStarFill /></div>
                </div>
                <div className="review__body">
                  This app has been a <b>game-changer</b> for me! It's saved me so
                  much time and effort in reading and comprehending books.
                </div>
              </div>

              {/* Review 2 */}
              <div className="review">
                <div className="review__header">
                  <div className="review__name">David B.</div>
                  <div className="review__stars"><BsStarFill /></div>
                </div>
                <div className="review__body">
                  I love this app! It provides <b>concise and accurate summaries</b>.
                </div>
              </div>

              {/* Review 3 */}
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Nathan S.</div>
                  <div className="review__stars"><BsStarFill /></div>
                </div>
                <div className="review__body">
                  Great way to get main takeaways without reading entire book.
                </div>
              </div>

              {/* Review 4 */}
              <div className="review">
                <div className="review__header">
                  <div className="review__name">Ryan R.</div>
                  <div className="review__stars"><BsStarFill /></div>
                </div>
                <div className="review__body">
                  Perfect for busy people who love reading but lack time.
                </div>
              </div>

            </div>

            {/* LOGIN BUTTON */}
            <div className="reviews__btn--wrapper">
              <button
                className="btn home__cta--btn"
                onClick={() => setLoginOpen(true)}
              >
                Login
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* LOGIN MODAL */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        openSignup={() => {}}
      />
    </>
  );
}
