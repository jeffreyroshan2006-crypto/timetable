"use client";

import Link from "next/link";
import styles from "./login.module.css";

export default function DevPortalPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <div className={styles.brandContainer}>
          <div className={styles.logo}></div>
          <h1 className={styles.brandTitle}>Aura</h1>
        </div>
        <p className={styles.brandSubtitle}>
          Academic Scheduling Platform. Authentication is temporarily bypassed for developer access.
        </p>
      </div>
      <div className={styles.loginRight}>
        <div className="card" style={{ width: "100%", maxWidth: "550px", padding: "2.5rem" }}>
          <h2 className="h2" style={{ marginBottom: "var(--space-2)" }}>Developer Access Hub</h2>
          <p className="text-muted" style={{ marginBottom: "var(--space-6)" }}>
            Select a workspace role below to access and develop their respective modules directly.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", marginBottom: "var(--space-4)" }}>
            <Link href="/admin" className="btn btn-outline" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "var(--space-4)", height: "auto", textAlign: "left", gap: "var(--space-1)" }}>
              <strong style={{ color: "var(--color-primary-600)" }}>Admin Portal</strong>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>Master data, rooms, analytics</span>
            </Link>

            <Link href="/hod" className="btn btn-outline" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "var(--space-4)", height: "auto", textAlign: "left", gap: "var(--space-1)" }}>
              <strong style={{ color: "var(--color-warning)" }}>HOD Portal</strong>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>Faculty load & approval</span>
            </Link>

            <Link href="/faculty" className="btn btn-outline" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "var(--space-4)", height: "auto", textAlign: "left", gap: "var(--space-1)" }}>
              <strong style={{ color: "var(--color-success)" }}>Faculty Portal</strong>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>Schedule & workloads</span>
            </Link>

            <Link href="/student" className="btn btn-outline" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "var(--space-4)", height: "auto", textAlign: "left", gap: "var(--space-1)" }}>
              <strong style={{ color: "var(--color-slate-700)" }}>Student Portal</strong>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>Timetable viewer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
