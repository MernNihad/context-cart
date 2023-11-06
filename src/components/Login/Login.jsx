import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; 

export default function MultilineTextFields() {

  const navigator = useNavigate();

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

let name = 'ansina'
console.log(name);




const handleSubmit = () => {
  // alert(`Email : ${email} \n Password : ${password}`);
  localStorage.setItem("name",email)
  navigator('/')
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="flex w-full justify-center items-center"></div>
        <h1>Login</h1>
        <div className="flex justify-center items-center w-full h-screen">
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            onChange={handleEmail}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Password"
            multiline
            maxRows={4}
            onChange={handlePassword}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Signup
          </Button>
        </div>
      </Box>
    </div>
  );
}
