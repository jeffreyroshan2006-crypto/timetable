import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  role: "admin" | "hod" | "faculty" | "student";
}

const ROLES_MENU = {
  admin: [
    { label: "Dashboard", path: "/admin" },
    { label: "Master Data", path: "/admin/master-data" },
    { label: "Timetables", path: "/admin/timetables" },
    { label: "Analytics", path: "/admin/analytics" },
    { label: "Settings", path: "/admin/settings" },
  ],
  hod: [
    { label: "Dashboard", path: "/hod" },
    { label: "Faculty Load", path: "/hod/faculty" },
    { label: "Timetables", path: "/hod/timetables" },
    { label: "Approvals", path: "/hod/approvals" },
  ],
  faculty: [
    { label: "My Schedule", path: "/faculty" },
    { label: "Classes & Rooms", path: "/faculty/classes" },
    { label: "Workload", path: "/faculty/workload" },
  ],
  student: [
    { label: "My Timetable", path: "/student" },
    { label: "Exams", path: "/student/exams" },
  ],
};

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const menuItems = ROLES_MENU[role] || [];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}></div>
        <span className={styles.brandName}>Aura</span>
      </div>
      
      <nav className={styles.navMenu}>
        <div className={styles.menuLabel}>Main Menu</div>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.sidebarFooter}>
        <Link href="/" className={styles.logoutBtn}>
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
