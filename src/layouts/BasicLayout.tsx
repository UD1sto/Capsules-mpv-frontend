import { Container } from "@mui/material";
import { Footer } from "@/components";
import { useRouter } from "next/router";
import { HomeLayout, AppLayout } from "@/layouts";
import styles from "@/styles/Layouts.module.css";

export function BasicLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/" && <HomeLayout> {children}</HomeLayout>}
      {router.pathname !== "/" && <AppLayout>{children}</AppLayout>}

      <footer className={styles.mainFooter}>
        <Container maxWidth="xl">
          <Footer />
        </Container>
      </footer>
    </>
  );
}
