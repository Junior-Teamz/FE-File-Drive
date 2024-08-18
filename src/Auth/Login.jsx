import { useState } from "react";
import {
  Box,
  Stack,
  IconButton,
  Typography,
  InputAdornment,
  TextField,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import Api from "../Api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = Cookies.get("token");

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
      const response = await Api.post("/api/login", {
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
      if (error.response && error.response.status === 401) {
        toast.error("Email atau password salah, silakan coba lagi.", {
          position: "top-center",
          duration: 4000,
        });
      } else {
        toast.error("Login gagal, silakan coba lagi.", {
          position: "top-center",
          duration: 4000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {!isMobile && (
        <Grid
          item
          xs={12}
          sm={6}
          md={7}
          sx={{
            backgroundImage: `url(/path-to-your-image.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              p: 4,
            }}
          />
        </Grid>
      )}

      <Grid item xs={12} sm={6} md={5} component={Container} maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            p: 4,
          }}
        >
          <Stack
            spacing={3}
            sx={{
              maxWidth: 400,
              mx: "auto",
            }}
            component="form"
            onSubmit={login}
          >
            <Typography variant="h6" gutterBottom>
              Welcome Back
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Please enter your details
            </Typography>

            <TextField
              fullWidth
              name="email"
              label="Email"
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
        </Box>
      </Grid>
    </Grid>
  );
}
