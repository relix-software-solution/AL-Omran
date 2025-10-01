import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type FormEvent } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import video1 from "../../assets/3.mp4";
import videoPoster from "../../assets/image/05.webp"; // استورد صورة البوستر المناسبة للفيديو
import image2 from "../../assets/image/8.webp";
import image3 from "../../assets/image/9.webp";
import image4 from "../../assets/image/2.webp";
import image5 from "../../assets/image/3.webp";
import image6 from "../../assets/image/6.webp";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Swal from "sweetalert2";

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1D1B56",
      borderRadius: "16px",
    },
    "&:hover fieldset": {
      borderColor: "#1D1B56",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1D1B56",
    },
    "& input": {
      color: "#1D1B56",
    },
    "& input::placeholder": {
      color: "#666",
      opacity: 1,
    },
  },
  "& .MuiInputLabel-root": {
    color: "#1D1B56",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#1D1B56",
  },
};

const images = [
  {
    type: "video",
    src: video1,
    poster: videoPoster, // إضافة بوستر الفيديو هنا
  },
  {
    type: "image",
    src: image2,
  },
  {
    type: "image",
    src: image3,
  },
  {
    type: "image",
    src: image4,
  },
  {
    type: "image",
    src: image5,
  },
  {
    type: "image",
    src: image6,
  },
];

const Commercial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t, i18n] = useTranslation();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "d6ec67ab-7c56-428a-b250-0f3d36627fec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success && i18n.language === "en") {
      Swal.fire({
        title: "Done!",
        text: "Your message has been sended",
        icon: "success",
      });
      // setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      // setResult(data.message);
    }
    if (data.success && i18n.language === "ar") {
      Swal.fire({
        title: "تم الإرسال",
        text: "لقد تم إرسال رسالتك بنجاح",
        icon: "success",
      });
      // setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      // setResult(data.message);
    }
  };
  return (
    <>
      <div id="comm">
        {/* Title Section */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "200px", md: "300px" },
            backgroundColor: "#BCA966",
            color: "#fff",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.8,
                ease: [0.75, 0.01, 0.31, 1],
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "40px", md: "72px" } }}
            >
              {t("dest9")}
            </Typography>
          </motion.div>
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
            {images.map((item, index) => (
              <Box
                key={index}
                sx={{ width: "100vw", height: "100%", flexShrink: 0 }}
              >
                {item.type === "video" ? (
                  <Box
                    component="video"
                    src={item.src}
                    poster={item.poster} // إضافة صورة البوستر هنا
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={item.src}
                    alt={`slide-${index}`}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                )}
              </Box>
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
              left: i18n.language === "ar" ? "auto" : { xs: 20, md: 60 },
              right: i18n.language === "ar" ? { xs: 20, md: 60 } : "auto",
              maxWidth: { xs: "150px", md: "300px" },
              fontSize: { xs: "18px", md: "36px" },
              color: "white",
              textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              zIndex: 2,
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("dest10")}
          </Typography>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: { xs: "80%", md: "50%" },
              left:
                i18n.language === "ar"
                  ? { xs: 76, md: "auto" }
                  : { xs: "auto", md: 16 },
              right:
                i18n.language === "ar"
                  ? { xs: "auto", md: 16 }
                  : { xs: 16, md: "auto" },
              transform: "translateY(-50%)",
              bgcolor: "#BCA966",
              color: "white",
              width: { xs: 45, md: 56 },
              height: { xs: 45, md: 56 },
              borderRadius: "50%",
              zIndex: 2,
              "&:hover": { bgcolor: "#BCA966C9" },
            }}
          >
            <ArrowForwardIosIcon sx={{ paddingLeft: "3px" }} />
          </IconButton>

          {/* Prev Button */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: { xs: "80%", md: "50%" },
              left:
                i18n.language === "ar"
                  ? { xs: 16, md: 16 }
                  : { xs: "auto", md: "auto" },
              right:
                i18n.language === "ar"
                  ? { xs: 76, md: "auto" }
                  : { xs: 76, md: 16 },
              transform: "translateY(-50%)",
              bgcolor: "#BCA966",
              color: "white",
              width: { xs: 45, md: 56 },
              height: { xs: 45, md: 56 },
              borderRadius: "50%",
              zIndex: 2,
              "&:hover": { bgcolor: "#BCA966C9" },
            }}
          >
            <ArrowForwardIosIcon
              sx={{ paddingLeft: "3px", transform: "rotate(180deg)" }}
            />
          </IconButton>
        </Box>

        {/* Contact / Input Section */}
        <div dir={t("dir")}>
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ width: "90%", margin: "50px auto", textAlign: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.75, 0.01, 0.31, 1],
                },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  textAlign: "center",
                  mb: 5,
                  color: "#1D1B56",
                  fontSize: { xs: "32px", md: "72px" },
                }}
              >
                {t("dest11")}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.75, 0.01, 0.31, 1],
                },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  textAlign: "center",
                  mb: 5,
                  color: "#1D1B56",
                  fontSize: { xs: "20px", md: "30px" },
                }}
              >
                - {t("dest12")} -
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  ease: [0.75, 0.01, 0.31, 1],
                },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Box
                sx={{ width: { xs: "100%", md: "60%" }, margin: "0 auto 30px" }}
              >
                <TextField
                  label={t("contact13")}
                  placeholder={t("contact14")}
                  name="name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon sx={{ color: "#1D1B56" }} />
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
                    mb: { xs: 3, md: 0 },
                  }}
                >
                  <TextField
                    label={t("contact15")}
                    placeholder={t("contact16")}
                    name="message"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon sx={{ color: "#1D1B56" }} />
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
                    name="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon sx={{ color: "#1D1B56" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={textFieldSx}
                  />
                </Box>
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: { xs: "140px", md: "200px" },
                  padding: "10px 20px",
                  fontSize: "16px",
                  background: "#BCA966",
                  color: "#fff",
                  borderRadius: "40px",
                  margin: "30px auto 10px",
                  "&:hover": {
                    backgroundColor: "#BCA966C9",
                  },
                }}
              >
                {t("contact12")}
              </Button>
            </motion.div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Commercial;
