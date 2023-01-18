import Head from "next/head";
import { Box, Container } from "@mui/material";
import { Footer, HomeMenu } from "@/components";

export function BasicLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <>
      <Head>
        <title>Capsula</title>
        <meta name="description" content="Capsula app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo&family=Jura:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header style={{ width: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            top: 0,
            zIndex: 100,
          }}
        >
          <Container maxWidth="xl">
            <HomeMenu />
          </Container>
        </Box>
      </header>
      <main
        style={{ overflow: "hidden", position: "relative", paddingTop: "90px" }}
      >
        {children}
      </main>
      <footer style={{ width: "100%", position: "absolute", bottom: 0 }}>
        <Container maxWidth="xl">
          <Footer />
        </Container>
      </footer>
    </>
  );
}
