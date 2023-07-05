import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cljosepnl0whj01t9ahgzgmul/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
