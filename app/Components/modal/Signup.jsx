"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Container, Grid, Paper, TextField, useTheme } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Toast from "../Toast";
import Lottie from "lottie-react";
import loginAnimation from "../../lottie-animation/login.json";
import { signupservice } from "@/app/utils/services/SignupService";

const SignUp = () => {
  const router = useRouter();
  const theme = useTheme();
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !signup.username ||
      !signup.password ||
      !signup.name ||
      !signup.address
    ) {
      toast.error("please fill in all the field");
    }
    try {
      const response = await signupservice(
        signup.username,
        signup.password,
        signup.name,
        signup.address
      );
      console.log(response);
      toast.success("Account Created Successfully");
      router.push("/login");
    } catch (error) {
      toast.error("Failed to Create Account");
      console.log(error);
    }
  }
  return (
    <>
      <div
        className="min-h-screen px-20"
        style={{
          paddingTop: "150px",
          paddingBottom: "180px",
          color: theme.palette.background.text,
          background: theme.palette.background.page,
        }}
      >
        <ToastContainer />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Lottie
                animationData={loginAnimation}
                style={{ height: "500px" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "30px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Typography component="h1" variant="h4" mb={4}>
                Create Account
              </Typography>
              <input
                type="text"
                className="bg-transparent w-full p-2 mt-2 rounded-lg border border-gray-500"
                placeholder="Username"
                style={{ color: theme.palette.background.headline }}
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    username: e.target.value,
                  })
                }
                value={signup.username}
                margin="normal"
              />
              <input
                type="password"
                className="bg-transparent w-full p-2 mt-4 rounded-lg border border-gray-500"
                placeholder="password"
                style={{ color: theme.palette.background.headline }}
                variant="outlined"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    password: e.target.value,
                  })
                }
                value={signup.password}
                margin="normal"
              />
              <input
                style={{ color: theme.palette.background.headline }}
                className="bg-transparent w-full p-2 mt-4 rounded-lg border border-gray-500"
                placeholder="Name"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    name: e.target.value,
                  })
                }
                value={signup.name}
                margin="normal"
              />
              <input
                className="bg-transparent w-full p-2 mt-4 rounded-lg border border-gray-500"
                placeholder="Address"
                style={{ color: theme.palette.background.headline }}
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    address: e.target.value,
                  })
                }
                value={signup.address}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  mt: 2,
                  background: theme.palette.background.button,
                  "&:hover": { backgroundColor: "#0069d9" },
                  color: theme.palette.background.text,
                }}
              >
                Create Account
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                are you already logged in? <Link href="/login">Login</Link>
              </Typography>
            </form>
            {/* </Paper> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SignUp;
