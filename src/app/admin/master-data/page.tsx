import Link from "next/link";

export default function MasterDataHub() {
  return (
    <div>
      <h1 className="h2">Master Data Management</h1>
      <p className="text-muted" style={{ marginBottom: "var(--space-6)" }}>
        Manage the foundational entities required for conflict-free scheduling.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-4)" }}>
        <Link href="/admin/master-data/departments" className="card" style={{ display: "block" }}>
          <h3 className="h3" style={{ color: "var(--color-primary-600)" }}>Departments</h3>
          <p className="text-muted">Manage academic departments and codes.</p>
        </Link>
        
        <Link href="/admin/master-data/rooms" className="card" style={{ display: "block" }}>
          <h3 className="h3" style={{ color: "var(--color-warning)" }}>Rooms & Labs</h3>
          <p className="text-muted">Configure classrooms, capacities, and types.</p>
        </Link>
        
        <Link href="/admin/master-data/faculty" className="card" style={{ display: "block" }}>
          <h3 className="h3" style={{ color: "var(--color-success)" }}>Faculty</h3>
          <p className="text-muted">Manage faculty profiles and workload limits.</p>
        </Link>
        
        <Link href="/admin/master-data/subjects" className="card" style={{ display: "block" }}>
          <h3 className="h3" style={{ color: "var(--color-slate-600)" }}>Subjects</h3>
          <p className="text-muted">Define curriculum subjects and hours.</p>
        </Link>
      </div>
    </div>
  );
}
