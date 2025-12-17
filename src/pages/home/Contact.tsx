import React, { type FormEvent } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  InputAdornment,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Swal from "sweetalert2";
import EmailIcon from "@mui/icons-material/Email";
import image1 from "../../assets/image/05.webp";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t, i18n] = useTranslation();
  const theme1 = useTheme();
  const isMdUp = useMediaQuery(theme1.breakpoints.up("md"));
  // email

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
    <div dir={t("dir")} id="contact">
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "100vh",
          width: { xs: "100%", md: "90%" },
          margin: "100px auto",
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
            backgroundColor: "#1d1b56c9",
          }}
        >
          {" "}
          <motion.div
            initial={{
              opacity: 0,
              x: isMdUp ? (i18n.language === "ar" ? 50 : -50) : 0,
              y: isMdUp ? 0 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.8,
                ease: [0.75, 0.01, 0.31, 1],
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
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
                {t("contact1")}
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
                {t("contact2")}
                <Link
                  href="mailto:info@alomran.sy"
                  underline="none"
                  sx={{ color: "white" }}
                >
                  info@alomran.sy
                </Link>
              </Typography>

              <Box
                component="form"
                onSubmit={onSubmit}
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
                    label={t("contact4")}
                    placeholder={t("contact6")}
                    name="name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon sx={{ color: "#BCA966" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label={t("contact5")}
                    placeholder={t("contact7")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon sx={{ color: "#BCA966" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* البريد الإلكتروني */}
                <TextField
                  label={t("contact8")}
                  placeholder={t("contact9")}
                  name="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "#BCA966" }} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* الرسالة */}
                <TextField
                  label={t("contact10")}
                  placeholder={t("contact11")}
                  name="message"
                  multiline
                  minRows={4}
                />

                {/* زر الإرسال */}
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: "#BCA966",
                    color: "white",
                    py: 1.5,
                    borderRadius: "999px",
                    mt: 5, // زودت المسافة فوق الزر
                  }}
                >
                  {t("contact12")} ➝
                </Button>
              </Box>
            </Container>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
