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
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t] = useTranslation();

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
              {t("contact1")}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
              {t("contact2")} <b> {t("contact3")}</b>
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
                  label={t("contact4")}
                  placeholder={t("contact6")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon sx={{ color: "#eadccc" }} />
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
                        <AccountCircleIcon sx={{ color: "#eadccc" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* البريد الإلكتروني */}
              <TextField
                label={t("contact8")}
                placeholder={t("contact9")}
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
                label={t("contact10")}
                placeholder={t("contact11")}
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
                {t("contact12")} ➝
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
