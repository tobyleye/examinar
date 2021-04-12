import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ComingSoon from "./coming-soon";
import Lost from "./components/Lost";

const Dashboard = React.lazy(() => import("./components/Dashboard"));

function Fallback() {
  return <div />;
}

function App() {
  return (
    <ChakraProvider>
      <React.Suspense fallback={<Fallback />}>
        <Router>
          <Switch>
            <Route exact path="/">
              <ComingSoon />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <Lost />
            </Route>
          </Switch>
        </Router>
      </React.Suspense>
    </ChakraProvider>
  );
}

export default App;
