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


      <div className="dashboard__main">

        {/* HEADER */}
        <header className="dashboardHeader">
          <div className="dashboardHeader__searchWrapper">
            <div className="skeleton skeleton-search"/>
          </div>
        </header>


        {/* CONTENT */}
        <div className="dashboard__content library__content">

          {/* TITLE */}
          <div className="skeleton skeleton-section-title" />

          {/* COUNT */}
          <div className="skeleton h-4 w-24 mb-6" />


          {/* GRID */}
          <div className="libraryGrid">

            {[...Array(6)].map((_,i)=>(
              <div key={i} className="libraryCard">

                {/* IMAGE */}
                <div className="skeleton skeleton-library-img"/>

                {/* TITLE */}
                <div className="skeleton skeleton-title mt-3"/>

                {/* AUTHOR */}
                <div className="skeleton skeleton-author"/>

                {/* SUBTITLE */}
                <div className="skeleton skeleton-desc"/>

                {/* META */}
                <div className="libraryMeta">
                  <div className="skeleton skeleton-meta"/>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  )

}

