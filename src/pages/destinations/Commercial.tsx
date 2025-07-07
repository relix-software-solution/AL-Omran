import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import image1 from "../../assets/image/1.webp";
import image2 from "../../assets/image/2.webp";
import image3 from "../../assets/image/3.webp";
import { useTranslation } from "react-i18next";

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

const images = [image1, image2, image3];

const Commercial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t] = useTranslation();

  return (
    <>
      <div id="comm">
        {/* Title Section */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "200px", md: "300px" },
            backgroundColor: "#c09660",
            color: "#fff",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "40px", md: "72px" },
            }}
          >
            {t("dest9")}
          </Typography>
        </Box>

        {/* Slideshow Container */}
        <Box
          position="relative"
          width="100%"
          height={{ xs: "30vh", md: "100vh" }}
          overflow="hidden"
        >
          {/* Sliding Images Wrapper */}
          <Box
            sx={{
              display: "flex",
              width: `${images.length * 100}vw`,
              transform: `translateX(-${current * 100}vw)`,
              transition: "transform 0.8s ease-in-out",
              height: "100%",
            }}
          >
            {images.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`slide-${index}`}
                sx={{
                  width: "100vw",
                  height: "100%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>

          {/* Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 100%)",
              zIndex: 1,
            }}
          />

          {/* Overlay Text */}
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              bottom: { xs: 20, md: 40 },
              left: { xs: 20, md: 60 },
              maxWidth: { xs: "300px", md: "450px" },
              fontSize: { xs: "28px", md: "72px" },
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              zIndex: 2,
            }}
          >
            {t("dest10")}
          </Typography>

          {/* Prev Button */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: { xs: "80%", md: "52%" },
              left: { xs: "auto", md: 16 },
              right: { xs: 76, md: "auto" },
              transform: "translateY(-50%)",
              bgcolor: "#c09660",
              color: "white",
              width: { xs: 45, md: 56 },
              height: { xs: 45, md: 56 },
              borderRadius: "50%",
              zIndex: 2,
              "&:hover": {
                bgcolor: "#b1864e",
              },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: { xs: "80%", md: "50%" },
              right: 16,
              transform: "translateY(-50%)",
              bgcolor: "#c09660",
              color: "white",
              width: { xs: 45, md: 56 },
              height: { xs: 45, md: 56 },
              borderRadius: "50%",
              zIndex: 2,
              "&:hover": {
                bgcolor: "#b1864e",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <div dir={t("dir")}>
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
              {t("dest11")}
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
              - {t("dest12")} -
            </Typography>

            <Box
              sx={{ width: { xs: "100%", md: "60%" }, margin: "0 auto 30px" }}
            >
              <TextField
                label={t("contact13")}
                placeholder={t("contact14")}
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
                  label={t("contact15")}
                  placeholder={t("contact16")}
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
                  label={t("contact8")}
                  placeholder={t("contact9")}
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
              {t("contact12")}
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Commercial;
