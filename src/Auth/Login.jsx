import { useState } from "react";
import {
  Stack,
  IconButton,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { EyeOff, Eye } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Api from "../Api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^.{8,}$/;

    if (!email.trim() || !password.trim()) {
      toast.error("Email dan password harus diisi dengan lengkap!", {
        position: "top-center",
        duration: 4000,
      });
      setLoading(false);
      return;
    }

    if (!emailPattern.test(email)) {
      toast.error("Email harus valid, dengan format user@example.com", {
        position: "top-center",
        duration: 4000,
      });
      setLoading(false);
      return;
    }

    if (!passwordPattern.test(password)) {
      toast.error("Password harus terdiri dari minimal 8 karakter", {
        position: "top-center",
        duration: 4000,
      });
      setLoading(false);
      return;
    }

    try {
      const response = await Api.post("/login", {
        email,
        password,
      });

      // Extract response data
      const { token, user, permissions, roles } = response.data;

      if (!roles || roles.length === 0) {
        toast.error("Akun tidak memiliki role yang valid", {
          position: "top-center",
          duration: 4000,
        });
        setLoading(false);
        return;
      }

      // Set cookies
      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      Cookies.set("permissions", JSON.stringify(permissions));
      Cookies.set("role", roles[0]);

      toast.success("Login berhasil!", {
        position: "top-center",
        duration: 4000,
      });

      // Navigate based on user role
      const userRole = roles[0];
      switch (userRole) {
        case "admin":
          navigate("/AdminDashboard");
          break;
        case "kaprog":
          navigate("/UserDashboard");
          break;
        default:
          navigate("/");
          break;
      }
    } catch (error) {
      // Handle request failure
      toast.error("Login gagal, silakan coba lagi.", {
        position: "top-center",
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack
      spacing={3}
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f4f6f8",
      }}
      component="form"
      onSubmit={login}
    >
      <Typography variant="h4" gutterBottom>
        Welcome To Sharing File
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={2}>
        Login to your account
      </Typography>

      <TextField
        fullWidth
        name="email"
        label="Email"
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          sx: {
            borderRadius: "8px",
          },
        }}
      />

      <TextField
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <Eye /> : <EyeOff />}
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            borderRadius: "8px",
          },
        }}
      />

      <LoadingButton
        fullWidth
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        sx={{
          py: 1.5,
          borderRadius: "8px",
          backgroundColor: "#1976d2",
          ":hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Login
      </LoadingButton>
    </Stack>
  );
}
