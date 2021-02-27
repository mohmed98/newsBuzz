import {
  Box,
  Divider,
  HStack,
  Heading,
  Tag,
  Img,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const NewsList = ({ news }) => {
  return (
    <>
      {news.map((item) => (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          // overflow="hidden"
          key={item._id}
          my={5}
          bgColor="white"
          p={2}
          mx="auto"
          boxShadow="base"
        >
          <Flex alignItems="center">
            <Img
              src={item.source.url}
              boxSize="50px"
              border={0}
              alt={item.source.title}
              overflow="hidden"
            />

            <Heading as="h5" size="sm" ml={2}>
              {item.source.title}{" "}
            </Heading>
            <Spacer />

            <ExternalLinkIcon />
          </Flex>
          <Box
            mt="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            // isTruncated
          >
            {item.title}
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm" mb="1">
            {item.created_at}
          </Box>
          <Divider my={1} />
          {/* {item.keywords.map((keyword) => (
            <p key={keyword._id}>{keyword.name}</p>
          ))} */}
          <HStack spacing={4} wrap="wrap">
            {item.keywords.map((keyword) => (
              <Tag
                size="lg"
                key={keyword._id}
                variant="outline"
                px={1}
                colorScheme="green"
                mb={1}
              >
                {keyword.name}
              </Tag>
            ))}
          </HStack>
        </Box>
      ))}
    </>
  );
};

export default NewsList;
