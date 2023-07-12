import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";
import { Container, Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { validate } from "../helpers/functions";
import { Link } from "react-router-dom";

import { create } from "zustand";
const useStore = create((set) => ({
  persons: [],
  setPersons: (persons) => set({ persons }),
}));

const useFetchData = () => {
  const { loading, data, error } = useQuery(GET_USERS);

  useEffect(() => {
    if (data && data.persons) {
      useStore.getState().setPersons(data.persons);
    }
  }, [data]);

  return { loading, data, error };
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledGrid = styled(Grid)`
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
`;

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { loading, data, error } = useFetchData();

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Data:", data);
    console.log("Error:", error);
  }, [data, error, loading]);

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, "");

    setPhone(numericValue);
  };

  const handleLogin = () => {
    setPhoneError("");
    setPasswordError("");

    let persons = [];
    if (data && data.persons) persons = data.persons;

    const loginData = { phone, password };
    const errors = validate(loginData, persons, "login");

    console.log(errors);
    
    if (errors.phone) setPhoneError(errors.phone);

    if (errors.password) setPasswordError(errors.password);

    if (Object.keys(errors).length === 0) console.log("success");
  };

  if (data && data.persons) console.log(data.persons);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <StyledContainer>
      <StyledGrid container spacing={3}>
        <Grid item xs={12} sx={{px: 3}}>
          <StyledTextField
            value={phone}
            onChange={(event) => handlePhoneChange(event)}
            label="شماره موبایل"
            variant="outlined"
            error={!!phoneError}
            helperText={phoneError}
            inputMode="tel"
          />
        </Grid>

        <Grid item xs={12} sx={{px: 3}}>
          <StyledTextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="رمز عبور"
            variant="outlined"
            error={!!passwordError}
            helperText={passwordError}
          />
        </Grid>

        <Grid item xs={12} sx={{px: 3}}>
          <Button
            variant="contained"
            sx={{ fontFamily: "inherit" }}
            fullWidth
            onClick={handleLogin}
          >
            ورود
          </Button>
        </Grid>

        <Grid item xs={12} sx={{px: 3}}>
          <Button variant="outlined" sx={{ fontFamily: "inherit" }} fullWidth>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              ثبت نام
            </Link>
          </Button>
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { useStore };
export default Login;
