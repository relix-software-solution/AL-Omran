import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import image1 from "../../assets/image/05.webp";

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        width: { xs: "100%", md: "90%" },
        margin: "50px auto",
        position: "relative",
      }}
    >
      {/* خلفية الصورة */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      {/* الفورم مع Blur */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "100%", md: "60%" },
          height: "100%",
          marginLeft: { md: "auto" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(19, 90, 136, 0.54)",
        }}
      >
        <Container
          sx={{ maxWidth: "90%", color: "white", py: { xs: 4, md: 0 } }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 5 }}
          >
            Let's Get in Touch.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
            Or just reach out manually to <b>example@gmail.com</b>
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4, // زودت المسافة بين الحقول بشكل واضح
              mt: 3,
            }}
          >
            {/* الاسم الأول والاسم الأخير */}
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 4, // زودت المسافة بين أول و آخر اسم
              }}
            >
              <TextField
                label="First Name"
                placeholder="Enter your first name.."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon sx={{ color: "#eadccc" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Last Name"
                placeholder="Enter your last name.."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon sx={{ color: "#eadccc" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* البريد الإلكتروني */}
            <TextField
              label="Email Address"
              placeholder="Enter your email address.."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#eadccc" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* الرسالة */}
            <TextField
              label="Message"
              placeholder="Enter your message here..."
              multiline
              minRows={4}
            />

            {/* زر الإرسال */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#0a3d62",
                color: "white",
                py: 1.5,
                borderRadius: "999px",
                mt: 5, // زودت المسافة فوق الزر
              }}
            >
              Submit Form ➝
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
