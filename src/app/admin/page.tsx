export default function AdminDashboard() {
  return (
    <div>
      <h1 className="h2">Institution Overview</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)" }}>
        <div className="card">
          <h3 className="h3">Total Departments</h3>
          <p className="h1" style={{color: "var(--color-primary-600)"}}>12</p>
        </div>
        <div className="card">
          <h3 className="h3">Timetables Published</h3>
          <p className="h1" style={{color: "var(--color-success)"}}>8</p>
        </div>
        <div className="card">
          <h3 className="h3">Active Conflicts</h3>
          <p className="h1" style={{color: "var(--color-danger)"}}>3</p>
        </div>
      </div>
    </div>
  );
}
