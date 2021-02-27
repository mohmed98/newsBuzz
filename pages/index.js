import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../comps/Navbar";
import NewsList from "../comps/NewsList";

export default function Home({ news }) {
  return (
    <>
      <Head>
        <title>Sport News | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        style={{
          backgroundColor: "#f5f5f5",
          marginTop: "15vh",
          padding: "1rem",
        }}
      >
        <Flex>
          <Box
            display={{ lg: "block", base: "none" }}
            pos="fixed"
            height="100%"
            w="200px"
            left="15"
            bg="white"
            flex="1"
          ></Box>

          <Box flex="2">
            <NewsList news={news} />
          </Box>

          <Box
            display={{ lg: "block", md: "none", base: "none" }}
            pos="fixed"
            height="100%"
            w="200px"
            right="15"
            bg="white"
            flex="1"
          ></Box>
        </Flex>
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch("http://80.240.21.204:1337/news?skip=12&limit=10");
  const data = await res.json();

  return { props: { news: data.news } };
}
