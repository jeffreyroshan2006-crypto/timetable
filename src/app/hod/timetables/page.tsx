"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function TimetableStudioPage() {
  const [timetables, setTimetables] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  useEffect(() => {
    fetchTimetables();
    fetch("/api/departments").then(res => res.json()).then(setDepartments);
  }, []);

  const fetchTimetables = async () => {
    const res = await fetch("/api/timetables");
    if (res.ok) {
      const data = await res.json();
      setTimetables(data);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/timetables", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, departmentId })
    });
    fetchTimetables();
    setTitle("");
  };

  return (
    <div>
      <h1 className="h2">Timetable Studio</h1>
      <p className="text-muted" style={{ marginBottom: "var(--space-6)" }}>Create, edit, and validate academic schedules.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-8)" }}>
        <div className="card">
          <h3 className="h3">New Timetable</h3>
          <form onSubmit={handleCreate} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            <div>
              <label className="label">Title / Academic Term</label>
              <input type="text" className="input-field" value={title} onChange={e => setTitle(e.target.value)} required placeholder="e.g., Fall 2026 - CS" />
            </div>
            <div>
              <label className="label">Target Department</label>
              <select className="input-field" value={departmentId} onChange={e => setDepartmentId(e.target.value)} required>
                <option value="">Select Department...</option>
                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "var(--space-2)" }}>Create Draft</button>
          </form>
        </div>

        <div className="card">
          <h3 className="h3">Drafts & Published Timetables</h3>
          <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {timetables.length === 0 ? <p className="text-muted">No timetables found.</p> : timetables.map(tt => (
              <div key={tt.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-4)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)" }}>
                <div>
                  <span style={{ fontWeight: 600, display: "block" }}>{tt.title}</span>
                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Department: {tt.department?.name} | Entries: {tt._count.entries} | Status: {tt.isPublished ? "✅ Published" : "📝 Draft"}
                  </span>
                </div>
                <button className="btn btn-outline">Edit Grid</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
