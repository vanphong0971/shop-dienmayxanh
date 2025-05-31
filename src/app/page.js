import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#home" className={styles.navLink}>Trang chủ</a></li>
            <li className={styles.navItem}><a href="#about" className={styles.navLink}>Giới thiệu</a></li>
            <li className={styles.navItem}><a href="#services" className={styles.navLink}>Dịch vụ</a></li>
            <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Liên hệ</a></li>
          </ul>
        </nav>
      </header>
      
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>Nguyễn Văn Phong</h1>
      </main>

      <footer className={styles.footer}>
        Trường Trung Cấp Kinh Tế Kỹ Thuật Quận 12
      </footer>
    </div>
  );
}