
export default function Dashboard(){


    return (
      <>
        <div className="flex items-center justify-between">
          <h1>Dashboard</h1>
          <a href="/logout">Logout</a>
        </div>

        <button onClick={() => (window.location.href = "/dashboard/create")}>
          crea post
        </button>
      </>
    );
}