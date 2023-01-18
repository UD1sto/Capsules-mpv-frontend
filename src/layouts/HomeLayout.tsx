import { HomeMenu } from "@/components";
import styles from "@/styles/Layouts.module.css";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <HomeMenu />
      </header>
      <main
        style={{
          backgroundColor: "#17181f",
        }}
        className={styles.baseLayout}
      >
        {children}
      </main>
    </>
  );
}
