import { MainMenu } from "@/components";

import styles from "@/styles/Layouts.module.css";
import { Box } from "@mui/material";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <MainMenu />
      </header>
      <main
        style={{
          position: "relative",
          minHeight: "100vh",
        }}
        className={styles.baseLayout}
      >
        <Box className={styles.layoutLight}></Box>
        <img
          src="/icons/ilustration1.svg"
          alt="ilustration1"
          className={styles.il1}
        />
        <img
          src="/icons/ilustration2.svg"
          alt="ilustration2"
          className={styles.il2}
        />
        {children}
      </main>
    </>
  );
}
