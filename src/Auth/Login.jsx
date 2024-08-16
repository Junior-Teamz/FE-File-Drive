import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

export default function Login() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h4">Login to File Sharing</Typography>
      </Stack>

      <Stack spacing={2.5}>
        {/* <RHFTextField name="email" label="Email address" /> */}

        {/* <RHFTextField
          name="password"
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <Iconify
                    icon={
                      password.value
                        ? "solar:eye-bold"
                        : "solar:eye-closed-bold"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}

        <Link
          variant="body2"
          color="inherit"
          underline="always"
          sx={{ alignSelf: "flex-end" }}
        >
          Forgot password?
        </Link>

        {/* <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton> */}
      </Stack>
    </>
  );
}
