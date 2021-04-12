import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ComingSoon from "./coming-soon";
import Lost from "./components/Lost";

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
