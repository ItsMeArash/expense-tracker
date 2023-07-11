// /* eslint-disable no-unused-vars */
import { Container, Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "./Login";
import { validate } from "../helpers/functions";

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

const Signup = () => {
  const persons = useStore((state) => state.persons);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");

  const handleSignup = () => {
    setNameError("");
    setPhoneError("");
    setPasswordError("");
    setRePasswordError("");

    console.log(persons);
    const signupData = { name, phone, password, rePassword }
    const errors = validate(signupData, persons, "signup");
    console.log(errors);

    if (errors.name) setNameError(errors.name)
    if (errors.phone) setPhoneError(errors.phone)
    if (errors.password) setPasswordError(errors.password)
    if (errors.rePassword) setRePasswordError(errors.rePassword)

    if (!Object.keys(errors).length) console.log("success");


  };
  const handlePhoneChange = (event) => {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, "");

    setPhone(numericValue);
  };

  const handleNameChange = (event) => {
    const input = event.target.value;
    const nameRegex = /[آ-ی ]+/g;
    const persianValue = input.match(nameRegex)?.[0] ?? '';
  
    setName(persianValue);
  };

  return (
    <StyledContainer>
      <StyledGrid container spacing={3}>
        <Grid item xs={12}>
          <StyledTextField
            value={name}
            onChange={(event) => handleNameChange(event)}
            variant="outlined"
            label="نام و نام خانوادگی"
            error={!!nameError}
            helperText={nameError}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField
            value={phone}
            onChange={(event) => handlePhoneChange(event)}
            variant="outlined"
            label="شماره موبایل"
            error={!!phoneError}
            helperText={phoneError}
            inputMode="tel"
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            variant="outlined"
            label="رمز عبور"
            error={!!passwordError}
            helperText={passwordError}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField
            value={rePassword}
            onChange={(event) => setRePassword(event.target.value)}
            variant="outlined"
            label="تکرار رمز عبور"
            error={!!rePasswordError}
            helperText={rePasswordError}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ fontFamily: "inherit" }}
            fullWidth
            onClick={handleSignup}
          >
            ثبت نام
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" sx={{ fontFamily: "inherit" }} fullWidth>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              ورود
            </Link>
          </Button>
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

export default Signup;
