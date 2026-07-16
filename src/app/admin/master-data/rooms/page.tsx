"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function RoomsPage() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("Theory");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await fetch("/api/rooms");
    if (res.ok) {
      const data = await res.json();
      setRooms(data);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, code, capacity, type })
    });
    
    if (res.ok) {
      setName("");
      setCode("");
      setCapacity("");
      fetchRooms();
    } else {
      alert("Failed to create room. Code might already exist.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
        <div>
          <h1 className="h2" style={{ marginBottom: 0 }}>Rooms & Labs</h1>
          <Link href="/admin/master-data" className="text-muted" style={{ textDecoration: "underline" }}>&larr; Back to Master Data</Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-8)" }}>
        <div className="card">
          <h3 className="h3">Add New Room</h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            <div>
              <label className="label">Room Name/Number</label>
              <input type="text" className="input-field" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g., Room 402" />
            </div>
            <div>
              <label className="label">Room Code (Unique)</label>
              <input type="text" className="input-field" value={code} onChange={e => setCode(e.target.value)} required placeholder="e.g., R-402" />
            </div>
            <div>
              <label className="label">Capacity (Students)</label>
              <input type="number" className="input-field" value={capacity} onChange={e => setCapacity(e.target.value)} required placeholder="e.g., 60" />
            </div>
            <div>
              <label className="label">Room Type</label>
              <select className="input-field" value={type} onChange={e => setType(e.target.value)}>
                <option value="Theory">Theory Classroom</option>
                <option value="Lab">Laboratory</option>
                <option value="Seminar">Seminar Hall</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "var(--space-2)" }}>Add Room</button>
          </form>
        </div>

        <div className="card">
          <h3 className="h3">Existing Rooms</h3>
          {loading ? <p>Loading...</p> : (
            <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {rooms.length === 0 ? <p className="text-muted">No rooms found.</p> : rooms.map(room => (
                <div key={room.id} style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-3)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-md)" }}>
                  <div>
                    <span style={{ fontWeight: 600, display: "block" }}>{room.name}</span>
                    <span className="text-muted" style={{ fontSize: "0.75rem" }}>{room.type} • Capacity: {room.capacity}</span>
                  </div>
                  <span className="text-muted" style={{ fontWeight: 600 }}>{room.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
