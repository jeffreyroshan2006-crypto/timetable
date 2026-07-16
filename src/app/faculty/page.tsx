export default function FacultyDashboard() {
  return (
    <div>
      <h1 className="h2">My Schedule Overview</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)" }}>
        <div className="card">
          <h3 className="h3">Classes Today</h3>
          <p className="h1" style={{color: "var(--color-primary-600)"}}>4</p>
        </div>
        <div className="card">
          <h3 className="h3">Weekly Hours</h3>
          <p className="h1" style={{color: "var(--color-success)"}}>18 / 20</p>
        </div>
      </div>
    </div>
  );
}
