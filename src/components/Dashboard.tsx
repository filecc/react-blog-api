
export default function Dashboard(){


    return (
      <>
        <div className="flex items-center justify-between">
          <h1>Dashboard</h1>
          <div className="flex justify-center items-center gap-2">
          <a href="/">Home</a>
          <a href="/logout">Logout</a>
          
          </div>
          
        </div>

        <button onClick={() => (window.location.href = "/dashboard/create")}>
          crea post
        </button>
      </>
    );
}