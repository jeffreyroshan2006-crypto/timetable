export default function StudentDashboard() {
  return (
    <div>
      <h1 className="h2">My Schedule Overview</h1>
      
      <div className="card" style={{ marginTop: "var(--space-6)" }}>
        <h3 className="h3" style={{ marginBottom: "var(--space-4)" }}>Weekly Timetable</h3>
        
        {/* Placeholder Grid to demonstrate styling and intent */}
        <div style={{ display: "grid", gridTemplateColumns: "100px repeat(5, 1fr)", gap: "1px", background: "var(--border-light)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          <div style={{ background: "var(--bg-app)", padding: "var(--space-2)", textAlign: "center", fontWeight: "bold" }}>Time</div>
          <div style={{ background: "var(--bg-app)", padding: "var(--space-2)", textAlign: "center", fontWeight: "bold" }}>Mon</div>
          <div style={{ background: "var(--bg-app)", padding: "var(--space-2)", textAlign: "center", fontWeight: "bold" }}>Tue</div>
          <div style={{ background: "var(--bg-app)", padding: "var(--space-2)", textAlign: "center", fontWeight: "bold" }}>Wed</div>
          <div style={{ background: "var(--bg-app)", padding: "var(--space-2)", textAlign: "center", fontWeight: "bold" }}>Thu</div>
          <div style={{ background: "var(--bg-app)", padding: "var(--space-2)", textAlign: "center", fontWeight: "bold" }}>Fri</div>
          
          <div style={{ background: "var(--bg-surface)", padding: "var(--space-2)", fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center" }}>09:00 - 10:00</div>
          <div style={{ background: "var(--color-primary-50)", padding: "var(--space-2)", fontSize: "0.85rem", borderLeft: "4px solid var(--color-primary-500)" }}>
            <strong>DBMS</strong><br/><span className="text-muted">Room 402</span>
          </div>
          <div style={{ background: "var(--bg-surface)", padding: "var(--space-2)" }}></div>
          <div style={{ background: "var(--color-primary-50)", padding: "var(--space-2)", fontSize: "0.85rem", borderLeft: "4px solid var(--color-primary-500)" }}>
            <strong>Networks</strong><br/><span className="text-muted">Room 401</span>
          </div>
          <div style={{ background: "var(--bg-surface)", padding: "var(--space-2)" }}></div>
          <div style={{ background: "var(--bg-surface)", padding: "var(--space-2)" }}></div>
        </div>
        
        <p className="text-muted" style={{ marginTop: "var(--space-4)", fontSize: "0.875rem" }}>
          * This view automatically reflects the latest "Published" timetable from the HOD. Drafts remain hidden.
        </p>
      </div>
    </div>
  );
}
