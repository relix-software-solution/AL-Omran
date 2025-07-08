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
  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t] = useTranslation();

  return (
    <>
      <div dir={t("dir")} id="res">
        <Box sx={{ width: "90%", margin: "50px auto", textAlign: "center" }}>
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
                color: "#193a51",
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
                color: "#193a51",
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
          </motion.div>
        </Box>
      </div>
    </>
  );
};

export default Residential;
