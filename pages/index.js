import { Box, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sport News | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container backgroundColor="#f5f5f5">
        <Flex>
          <Box
            display={{ lg: "block", base: "none" }}
            pos="fixed"
            height="100%"
            w="200px"
            left="20"
            bg="whatsapp.100"
          >
            Hello
          </Box>
          <Box flex="1" bg="whatsapp.100">
            Hello
          </Box>
          <Box
            display={{ lg: "block", base: "none" }}
            pos="fixed"
            height="100%"
            w="200px"
            right="20"
            bg="whatsapp.100"
          >
            Hello
          </Box>
        </Flex>
      </Container>
    </>
  );
}
