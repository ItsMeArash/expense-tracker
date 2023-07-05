import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";
import { Container, Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { validatePhone, validatePassword } from "../helpers/functions";

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

  const { loading, data, error } = useQuery(GET_USERS);

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

    if (validatePhone(phone, persons)) {
      setPhoneError(validatePhone(phone, persons));
    }

    if (validatePassword(password, persons)) {
      setPasswordError(validatePassword(password, persons));
    }

    if (!validatePhone(phone, persons) && !validatePassword(password, persons)) {
      console.log("success");
    }
  };

  if (data && data.persons) {
    console.log(data.persons);
  }

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <StyledContainer>
      <StyledGrid container spacing={3}>
        <Grid item xs={12}>
          <StyledTextField
            value={phone}
            onChange={(event) => handlePhoneChange(event)}
            label="شماره موبایل"
            variant="outlined"
            error={!!phoneError}
            helperText={phoneError}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="رمز عبور"
            variant="outlined"
            error={!!passwordError}
            helperText={passwordError}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ fontFamily: "inherit" }}
            fullWidth
            onClick={handleLogin}
          >
            ورود
          </Button>
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

export default Login;
