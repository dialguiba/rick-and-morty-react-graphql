import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { HashRouter } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  name: "rickandmorty-graphql",
  version: "1.0",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
