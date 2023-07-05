import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
