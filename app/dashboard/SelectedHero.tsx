import Image from "next/image"
import { FaPlay } from "react-icons/fa"

export default function SelectedHero() {
  return (
    <section className="selectedHero">

      <h2 className="sectionTitle">Selected just for you</h2>

      <div className="selectedHero__card">

        {/* LEFT TEXT */}
        <div className="selectedHero__left">
          <p>
            How Constant Innovation Creates Radically Successful Businesses
          </p>
        </div>

        {/* BOOK IMAGE */}
        <div className="selectedHero__image">
          <Image
            src="/the-lean-startup.png"
            alt="Lean Startup"
            width={140}
            height={140}
          />
        </div>

        {/* RIGHT INFO */}
        <div className="selectedHero__right">

          <h3>The Lean Startup</h3>
          <p className="selectedHero__author">Eric Ries</p>

          <div className="selectedHero__audio">
            <div className="selectedHero__play">
              <FaPlay />
            </div>
            <span className="selectedHero__timer">3 mins 23 secs</span>
          </div>

        </div>

      </div>
    </section>
  )
}