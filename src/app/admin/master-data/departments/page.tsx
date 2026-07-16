"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const res = await fetch("/api/departments");
    if (res.ok) {
      const data = await res.json();
      setDepartments(data);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/departments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, code })
    });
    
    if (res.ok) {
      setName("");
      setCode("");
      fetchDepartments();
    } else {
      alert("Failed to create department. Code might already exist.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
        <div>
          <h1 className="h2" style={{ marginBottom: 0 }}>Departments</h1>
          <Link href="/admin/master-data" className="text-muted" style={{ textDecoration: "underline" }}>&larr; Back to Master Data</Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-8)" }}>
        <div className="card">
          <h3 className="h3">Add New Department</h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            <div>
              <label className="label">Department Name</label>
              <input type="text" className="input-field" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g., Computer Science" />
            </div>
            <div>
              <label className="label">Department Code</label>
              <input type="text" className="input-field" value={code} onChange={e => setCode(e.target.value)} required placeholder="e.g., CSE" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "var(--space-2)" }}>Add Department</button>
          </form>
        </div>

        <div className="card">
          <h3 className="h3">Existing Departments</h3>
          {loading ? <p>Loading...</p> : (
            <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {departments.length === 0 ? <p className="text-muted">No departments found.</p> : departments.map(dept => (
                <div key={dept.id} style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-3)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontWeight: 600 }}>{dept.name}</span>
                  <span className="text-muted" style={{ fontWeight: 600 }}>{dept.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
