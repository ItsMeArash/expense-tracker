import Login from "./components/Login";
import Signup from "./components/Signup";

import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
