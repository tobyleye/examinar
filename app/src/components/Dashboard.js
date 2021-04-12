import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard() {
  return (
    <Box pl={200}>
      <Sidebar width={200} />
      <Box px={8} pt={6}>
        <Topbar />
        <Box as="main"></Box>
      </Box>
    </Box>
  );
}
