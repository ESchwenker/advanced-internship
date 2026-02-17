export default function Loading() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="skeleton skeleton-logo" />
        {[...Array(6)].map((_,i)=>(
          <div key={i} className="skeleton skeleton-sidebar-link" />
        ))}
      </aside>

      <main className="dashboard__main">

        {/* HEADER */}
        <div className="header">
          <div className="skeleton skeleton-header" />
        </div>

        <div className="dashboard__content">

          {/* HERO */}
          <div className="skeleton skeleton-hero" />

          {/* RECOMMENDED */}
          <div className="skeleton skeleton-section-title" />

          <div className="skeleton-row">
            {[...Array(5)].map((_,i)=>(
              <div key={i} className="skeleton skeleton-book" />
            ))}
          </div>

          {/* SUGGESTED */}
          <div className="skeleton skeleton-section-title" />

          <div className="skeleton-row">
            {[...Array(5)].map((_,i)=>(
              <div key={i} className="skeleton skeleton-book" />
            ))}
          </div>

        </div>
      </main>
    </div>
  )
}


