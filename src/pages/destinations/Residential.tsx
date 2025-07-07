import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#193a51",
      borderRadius: "16px",
    },
    "&:hover fieldset": {
      borderColor: "#193a51",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#193a51",
    },
    "& input": {
      color: "#193a51",
    },
    "& input::placeholder": {
      color: "#666",
      opacity: 1,
    },
  },
  "& .MuiInputLabel-root": {
    color: "#193a51",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#193a51",
  },
};

const Residential = () => {
  return (
    <>
      <Box sx={{ width: "90%", margin: "50px auto", textAlign: "center" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            mb: 5,
            color: "#193a51",
            fontSize: { xs: "32px", md: "72px" },
          }}
        >
          Reserve Your Forever Home
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            mb: 5,
            color: "#193a51",
            fontSize: { xs: "20px", md: "30px" },
          }}
        >
          - Reserve Your Apartment -
        </Typography>

        <Box sx={{ width: { xs: "100%", md: "60%" }, margin: "0 auto 30px" }}>
          <TextField
            label="Name"
            placeholder="Enter your name.."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon sx={{ color: "#193a51" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldSx}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            margin: "auto",
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              marginBottom: { xs: "30px", md: "0" },
            }}
          >
            <TextField
              label="ُPhone Number"
              placeholder="Enter your phone number.."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: "#193a51" }} />
                  </InputAdornment>
                ),
              }}
              sx={textFieldSx}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "48%" } }}>
            <TextField
              label="ُEmail"
              placeholder="Enter your email.."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: "#193a51" }} />
                  </InputAdornment>
                ),
              }}
              sx={textFieldSx}
            />
          </Box>
        </Box>
        <Button
          sx={{
            width: { xs: "140px", md: "200px" },
            padding: "10px 20px",
            fontSize: "16px",
            background: "#c09660",
            color: "#fff",
            borderRadius: "40px",
            margin: "30px auto 10px",
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Residential;
