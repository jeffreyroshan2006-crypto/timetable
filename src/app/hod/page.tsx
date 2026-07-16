export default function HodDashboard() {
  return (
    <div>
      <h1 className="h2">Department Status</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)", marginBottom: "var(--space-8)" }}>
        <div className="card">
          <h3 className="h3">Draft Timetables</h3>
          <p className="h1" style={{color: "var(--color-warning)"}}>2</p>
        </div>
        <div className="card">
          <h3 className="h3">Faculty Members</h3>
          <p className="h1" style={{color: "var(--color-primary-600)"}}>45</p>
        </div>
      </div>
    </div>
  );
}
