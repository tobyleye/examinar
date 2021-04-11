import * as React from "react";
import { Box, Text, Heading, Spinner } from "@chakra-ui/react";

const isProd = process.env.NODE_ENV === "production";

export default function ComingSoon() {
  const [message, setMessage] = React.useState(null);
  React.useEffect(() => {
    const effect = async () => {
      console.log({ env: process.env.NODE_ENV });
      const data = await fetch(
        isProd ? "https://examin-er.herokuapp.com/" : "http://localhost:4000"
      ).then((res) => res.json());
      setMessage(data.message);
    };
    effect();
  }, []);

  return (
    <Box h="100vh" display="grid" placeItems="center">
      {message ? (
        <Box textAlign="center">
          <Heading size="lg" textTransform="capitalize">
            {message}
          </Heading>
          <Text size="sm" mt={1} color="gray.600" fontStyle="italic">
            Coming soon
          </Text>
        </Box>
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
