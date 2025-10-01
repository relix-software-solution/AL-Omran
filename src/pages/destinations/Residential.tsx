import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import type { FormEvent } from "react";
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

const Residential = () => {
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
      <div dir={t("dir")} id="res">
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{ width: "90%", margin: "50px auto", textAlign: "center" }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
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
              {t("dest7")}
            </Typography>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
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
              - {t("dest8")} -
            </Typography>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
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
                  marginBottom: { xs: "30px", md: "0" },
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
    </>
  );
};

export default Residential;
