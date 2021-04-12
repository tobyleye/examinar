import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <Box px={200}>
      <Sidebar width={200} />
    </Box>
  );
}
