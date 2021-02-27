import {
  Button,
  Box,
  Flex,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Heading,
  Spacer,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box pos="fixed" w="100%" top="0" zIndex="5">
      <nav bg="#00a67d">
        <Flex bg="#00a67d" p={3} px={{ lg: 10 }} mb={5}>
          <Heading color="white" size="md" my="auto">
            newsbuzz
          </Heading>

          <Spacer />

          <Box display={{ lg: "none", base: "block" }} ml="1">
            <InputGroup bg="white" borderRadius={10}>
              <InputLeftAddon children={<SearchIcon color="#00a67d" />} />
              <Input type="text" placeholder="Search language or item" />
            </InputGroup>
          </Box>

          <Spacer />

          <Box display={{ lg: "none", base: "block" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                size="md"
                variant="outline"
                border={0}
                color="#fff"
              />
              <MenuList>
                <MenuItem>Login</MenuItem>
                <MenuItem>Register</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Flex display={{ lg: "block", base: "none" }}>
            <Button
              variant="outline"
              colorScheme="green"
              borderColor="White"
              color="white"
              borderRadius="20px"
              mr={1}
            >
              LOGIN
            </Button>
            <Button
              // variant="outline"
              bg="#f5f6f7"
              color="green.600"
              borderRadius="20px"
            >
              Regiter
            </Button>
          </Flex>
        </Flex>
      </nav>
    </Box>
  );
};

export default Navbar;
