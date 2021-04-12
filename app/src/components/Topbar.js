import { Avatar, IconButton, Input, Box, Text, HStack } from "@chakra-ui/react";
import { BellIcon, SearchIcon } from "@chakra-ui/icons";

export default function Topbar() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box height="40px" w="320px" position="relative">
        <Input
          type="text"
          w="full"
          h="full"
          bg="gray.100"
          pr={8}
          placeholder="Search..."
        />
        <Box
          h="full"
          w="auto"
          position="absolute"
          right="0"
          top="0"
          zIndex="4"
          display="grid"
          placeItems="center"
          px={3}
        >
          <SearchIcon fontWeight={800} />
        </Box>
      </Box>
      <HStack display="flex" alignItems="center" spacing={4}>
        <Text fontWeight={600}>John doe</Text>
        <Avatar size="md" borderRadius="none" />
        <IconButton paddingLeft="4px" paddingRight="4px">
          <Box position="relative">
            <BellIcon w={10} h={5} />
            <Box
              bg="blue.400"
              color="white"
              borderRadius="100%"
              position="absolute"
              right="2px"
              top="-4px"
              fontSize="12px"
              w="16px"
              h="16px"
              display="grid"
              placeItems="center"
            >
              3
            </Box>
          </Box>
        </IconButton>
      </HStack>
    </Box>
  );
}
