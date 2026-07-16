"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "admin" | "hod" | "faculty" | "student";
  title?: string;
}

const ROLE_NAMES = {
  admin: "Administrator",
  hod: "Head of Department",
  faculty: "Faculty",
  student: "Student"
};

export default function DashboardLayout({ children, role, title }: DashboardLayoutProps) {
  return (
    <div className="app-container">
      <Sidebar role={role} />
      <div className="main-content">
        <Navbar 
          title={title} 
          userName="Demo User" 
          userRole={ROLE_NAMES[role]} 
        />
        <main className="page-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
