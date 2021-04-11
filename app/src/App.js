import * as React from "react";
import { Box, ChakraProvider, Heading, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ComingSoon from "./coming-soon";

function generateRandomColor() {
  const rgb = Array(3)
    .fill()
    .map(() => Math.floor(Math.random() * 255));
  return `rgb(${rgb})`;
}

function Lost() {
  const [bg, setBg] = React.useState();
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{
        background: bg,
      }}
      onClick={() => setBg(generateRandomColor())}
    >
      <Box textAlign="center" userSelect="none">
        <Heading size="xl" mb={2}>
          It would appear you are lost!
        </Heading>
        <Text>
          Click on anywhere on the page to change the background color
        </Text>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <ComingSoon />
          </Route>
          <Route path="*">
            <Lost />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
