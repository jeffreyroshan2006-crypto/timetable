import styles from "./Navbar.module.css";

interface NavbarProps {
  title?: string;
  userName: string;
  userRole: string;
}

export default function Navbar({ title = "Dashboard", userName, userRole }: NavbarProps) {
  return (
    <header className={styles.navbar}>
      <div className={styles.navLeft}>
        <h2 className={styles.pageTitle}>{title}</h2>
      </div>
      
      <div className={styles.navRight}>
        <div className={styles.notificationBell}>
          <span className={styles.badge}></span>
          {/* Bell Icon Placeholder */}
          <div style={{ width: 20, height: 20, background: 'var(--color-slate-400)', borderRadius: '50%' }}></div>
        </div>
        
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            {userName.charAt(0)}
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{userName}</span>
            <span className={styles.userRole}>{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
