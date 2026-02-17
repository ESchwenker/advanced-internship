export default function Loading(){

  return(

    <div className="dashboard__content library__content">

      <div className="skeleton h-10 w-48 mb-6"/>

      <div className="libraryGrid">

        {[...Array(6)].map((_,i)=>(
          <div key={i} className="libraryCard">

            <div className="skeleton h-[180px] w-[180px]" />

            <div className="skeleton h-6 w-40 mt-3"/>
            <div className="skeleton h-4 w-28 mt-2"/>
            <div className="skeleton h-4 w-48 mt-2"/>

          </div>
        ))}

      </div>

    </div>

  )
}
