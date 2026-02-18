export default function Loading() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="skeleton skeleton-logo" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="skeleton skeleton-sidebar-link" />
        ))}
      </aside>


      <main className="dashboard__main">

        {/* HEADER */}
        <header className="dashboardHeader">
          <div className="dashboardHeader__searchWrapper">
            <div className="skeleton skeleton-search" />
          </div>
        </header>


        {/* HERO */}
        <section className="selectedHero">

          <div className="skeleton skeleton-section-title" />

          <div className="selectedHero__card skeleton-hero-card">

            <div className="skeleton skeleton-hero-left" />

            <div className="skeleton skeleton-hero-image" />

            <div className="selectedHero__right">
              <div className="skeleton skeleton-text-lg" />
              <div className="skeleton skeleton-text-sm" />
              <div className="skeleton skeleton-text-sm w-40" />
            </div>

          </div>

        </section>


        {/* RECOMMENDED */}
        <CarouselSkeleton />


        {/* SUGGESTED */}
        <CarouselSkeleton />

      </main>

    </div>
  );
}



function CarouselSkeleton() {
  return (
    <section className="recommended">

      <div className="skeleton skeleton-section-title" />
      <div className="skeleton skeleton-subtitle" />

      <div className="recommended__scroll">

        {[...Array(6)].map((_, i) => (
          <div key={i} className="carouselCard">

            <div className="carouselCard__inner">

              <div className="carouselCard__coverWrapper">
                <div className="carouselCard__image skeleton skeleton-book-img" />
              </div>

              <div className="carouselCard__content">

                <div className="skeleton skeleton-title" />

                <div className="skeleton skeleton-author" />

                <div className="skeleton skeleton-desc" />

                <div className="carouselCard__meta">
                  <div className="skeleton skeleton-meta" />
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

