import { Button } from "@chakra-ui/button";
import {
  Box,
  Divider,
  Heading,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";

export default function Sidebar({ width }) {
  return (
    <Box
      as="aside"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      width={width}
      bg="gray.100"
      px={4}
      py={3}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <Heading mt={5} mb={6} size="md" textAlign="center">
        Examiner
      </Heading>
      <Button colorScheme="blue" size="sm">
        <Box
          display="flex"
          w="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text> New Test</Text>
          <AddIcon />
        </Box>
      </Button>
      <Box mt={12}>
        <Stack spacing={2}>
          <Heading size="xs" mb={2}>
            Tests
          </Heading>
          <StackItem>Test1</StackItem>
          <StackItem>Test2</StackItem>
          <StackItem>Test3</StackItem>
        </Stack>
      </Box>

      <Divider mt="16" />
    </Box>
  );
}
