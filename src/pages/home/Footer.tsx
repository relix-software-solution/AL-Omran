import { Box, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <>
      <Box sx={{ height: "100%", backgroundColor: "#193a51" }}>
        <Box
          sx={{
            width: "90%",
            margin: "auto",
            padding: { xs: "20px 0", md: "40px 40px 0" },
            display: { xs: "block", md: "flex" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              component="span"
              sx={{ fontSize: "36px", color: "#eadccc" }}
            >
              Al-Omran
            </Typography>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                color: "#fff",
                maxWidth: { xs: "300px", md: "400px" },
                margin: "20px 0",
              }}
            >
              From untouched land to thriving life, we don't just build places,
              we shape stories.
            </Typography>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                color: "#eadccc",
                display: "flex",
                gap: "10px",
              }}
            >
              <XIcon />
              <FacebookIcon />
              <InstagramIcon />
              <WhatsAppIcon />
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              padding: { xs: "20px 0 0", md: "30px" },
              display: "flex",
            }}
          >
            <Box sx={{ width: "50%" }}>
              {" "}
              <Typography
                component="h5"
                sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
              >
                Home
              </Typography>
              <Typography
                component="h5"
                sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
              >
                Services
              </Typography>
              <Typography
                component="h5"
                sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
              >
                About Al-Omran
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              {" "}
              <Typography
                component="h5"
                sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
              >
                Contact Us
              </Typography>
              <Typography
                component="h5"
                sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
              >
                +963 11 111
              </Typography>
              <Typography
                component="h5"
                sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
              >
                example@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Box
            sx={{ width: "100%", height: "2px", backgroundColor: "#eadccc" }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "90%",
            margin: "auto",
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography
              component="h5"
              sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
            >
              2025 © Graphy, All right reserved
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h5"
              sx={{
                fontSize: "16",
                color: "#eadccc",
                margin: "20px 0",
                display: { xs: "none", md: "block" },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              component="h5"
              sx={{
                fontSize: "16",
                color: "#eadccc",
                margin: "20px 0",
                display: { xs: "none", md: "block" },
              }}
            >
              Terms of Services
            </Typography>
            <Typography
              component="h5"
              sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
            >
              Designed By : Bayan
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
