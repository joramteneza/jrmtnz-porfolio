"use client";
import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { MdClose } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(true);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNextOrLogin = () => {
    // Add your login logic here
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Sign in" size="l">
      <div className="flex flex-col p-5 mx-5 gap-6">
        <h2 className="flex flex-col text-3xl font-bold mb-4 text-center items-center gap-6">
          <BsTwitter color="#0099FF" size={40} />
          Sign In to Twitter
        </h2>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 2,
          }}
        >
          <TextFieldEditor
            label="Phone, email, or username"
            id="username-input"
            disabled={showPassword}
            value={username}
            onChange={handleUsernameChange}
            variant="filled"
            style={{ marginTop: 11 }}
          />
          {showPassword && (
            <div className="w-full">
              <TextFieldEditor
                label="Password"
                id="password-input"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                variant="filled"
                style={{ marginTop: 11, width: "100%" }}
              />
              <div className="pl-2 text-sm text-[#0099FF]">
                Forgot Password?
              </div>
            </div>
          )}
        </Box>
        <button
          onClick={() => handleNextOrLogin()}
          className={`w-full px-4 py-2  bg-black ${
            showPassword && password === "" && "bg-gray-500"
          } font-semibold text-white rounded-full `}
        >
          {!showPassword ? "Next" : "Log in"}
        </button>
        {!showPassword && (
          <button className="w-full px-4 py-2 font-semibold rounded-full border-[1px]">
            Forgot password?
          </button>
        )}
        <div className="flex gap-1 pl-2 text-lg font-normal">
          Don&apos;t have an account?{" "}
          <p className="cursor-pointer hover:underline text-[#0099FF]">
            Sign up
          </p>
        </div>
      </div>
    </Modal>
  );
};

const Twitter = () => {
  return <SignIn />;
};

export default Twitter;

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  title?: string;
  size?: "xs" | "s" | "m" | "l";
  children?: JSX.Element | JSX.Element[];
}
const Modal = ({ children, open, setOpen, title, size }: ModalProps) => {
  return (
    <>
      {open ? (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen overflow-y-auto bg-gray-400 bg-opacity-50 md:inset-0 h-modal md:h-full"
        >
          <div
            className={`relative max-w-2xl bg-white rounded-2xl min-h-32 md:w-[600px] h-[600px] flex flex-col items-center`}
          >
            <div
              className="absolute top-3 left-3 hover:rounded-full  hover:bg-gray-100 p-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <MdClose size={24} />
            </div>
            <div className="p-2 md:max-w-[400px]">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const TextFieldEditor = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
