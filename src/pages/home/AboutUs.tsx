import Box from "@mui/material/Box";
import aboutImage from "../../assets/image/AboutUs.webp";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          margin: "30px auto",
          alignContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          component="span"
          sx={{ fontSize: "36px", color: "#193a51" }}
        >
          About Al-Omran
        </Typography>
      </Box>
      <Box
        sx={{
          width: "90%",
          display: { xs: "block", md: "flex" },
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "47%" } }}>
          <Box
            component="img"
            src={aboutImage}
            alt="About Us"
            sx={{
              width: "100%",
              height: { xs: 200, md: 400 },
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              color: "#000",
              p: 2,
              width: "90%",
              marginBottom: "20px",
              textAlign: { xs: "left", md: "center" },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: "32px",
                color: "#000",
              }}
            >
              Al-Omran Real Estate Company
            </Typography>{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                color: "#000",
              }}
            >
              Al Omran Real Estate Development strives to elevate living
              standards by creating thoughtfully designed, innovative spaces
              that blend functionality with aesthetic appeal. Through visionary
              planning and sustainable practices, it transforms communities,
              fosters connectivity, and enhances everyday experiences. Each
              project is a step toward smarter, more vibrant living—where
              architecture, comfort, and quality of life come together to shape
              a better future.
            </Typography>{" "}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: { xs: "300px", md: "100px" },
          backgroundColor: "#193a51",
          margin: "30px 0",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            margin: "auto",
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "28px",
              color: "#eadccc",
              alignContent: "center",
            }}
          >
            Explore more about Al-Omran Company
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowCircleDownIcon />}
            href="/company-profile.pdf" // حط رابط ملف PDF الحقيقي هون
            download
            sx={{
              backgroundColor: "#135a88",
              color: "#fff",
              borderRadius: "0px",
              textTransform: "none",
              margin: { xs: "20px 0", md: "0" },
              px: 4,
              py: 1.5,
              fontWeight: 500,
              fontSize: "16px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#164052", // لون أغمق شوي عند الهوفر
              },
            }}
          >
            Download Company Profile
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(19, 90, 136)",
            backdropFilter: "blur(24px)",
            color: "#fff",
            p: { xs: 4, md: 4 },
            width: { xs: "80%", md: "40%" },
            margin: { xs: "0px auto 20px", md: "0 0 20px 0" },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "28px",
              color: "#eadccc",
            }}
          >
            Vision
          </Typography>{" "}
          To be the nation’s leading real estate developer in creating upscale
          communities that reflect a distinguished lifestyle and exceptional
          quality.
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(19, 90, 136)",
            backdropFilter: "blur(24px)",
            color: "#fff",
            p: { xs: 4, md: 4 },
            width: { xs: "80%", md: "40%" },
            margin: { xs: "0px auto 20px", md: "0 0 20px 0" },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "28px",
              color: "#eadccc",
            }}
          >
            Mission
          </Typography>{" "}
          To develop pioneering projects that enhance community living through
          excellence in design and quality execution, with a commitment to
          delivering unique and integrated living experiences.
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
