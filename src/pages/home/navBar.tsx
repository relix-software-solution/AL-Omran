import * as React from "react";
import { styled } from "@mui/material/styles";
import { HashLink as Link } from "react-router-hash-link";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: "40px",
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: "rgba(19, 90, 136, 0.54)",
  boxShadow: (theme.vars || theme).shadows[1],
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    setOpen(newOpen);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t, i18n] = useTranslation();

  return (
    <div dir={t("dir")}>
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: "calc(var(--template-frame-height, 0px) + 28px)",
        }}
      >
        <Box
          sx={{
            width: "92%",
            margin: "auto",
          }}
        >
          <StyledToolbar variant="dense" disableGutters>
            <Box
              sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "36px" },
                    padding: "0px 20px",
                    color: "#eadccc",
                  }}
                >
                  {t("title")}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
                margin: "0px 10px",
              }}
            >
              <Link to="/">
                <Button variant="text" size="medium" sx={{ color: "#eadccc" }}>
                  {t("home")}
                </Button>
              </Link>
              <Button variant="text" size="medium">
                {t("about")}
              </Button>
              <Link to="/destinations">
                {" "}
                <Button variant="text" size="medium">
                  {t("destination")}
                </Button>
              </Link>
              <Button variant="text" size="medium">
                {t("services")}
              </Button>
              {i18n.language === "ar" && (
                <Button
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                  variant="text"
                  size="medium"
                  sx={{ color: "#eadccc" }}
                >
                  En
                  <LanguageIcon
                    sx={{ margin: "0px 5px", color: "#fff", fontSize: "18px" }}
                  />
                </Button>
              )}
              {i18n.language === "en" && (
                <Button
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                  variant="text"
                  size="medium"
                  sx={{ color: "#eadccc" }}
                >
                  Ar
                  <LanguageIcon
                    sx={{ margin: "0px 5px", color: "#fff", fontSize: "18px" }}
                  />
                </Button>
              )}
              <Button
                variant="contained"
                size="medium"
                sx={{ borderRadius: "40px", color: "#eadccc" }}
              >
                {t("getInTouch")}
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ margin: "0 10px", color: "#fff" }} />
              </IconButton>
              <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    top: "var(--template-frame-height, 0px)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <div dir={t("dir")}>
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: "rgba(19, 90, 136, 0.54)",
                      backdropFilter: "blur(24px)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {i18n.language === "ar" && (
                        <Button
                          onClick={() => {
                            i18n.changeLanguage("en");
                          }}
                          variant="text"
                          size="medium"
                          sx={{ color: "#eadccc" }}
                        >
                          En
                          <LanguageIcon
                            sx={{
                              margin: "0px 5px",
                              color: "#fff",
                              fontSize: "18px",
                            }}
                          />
                        </Button>
                      )}
                      {i18n.language === "en" && (
                        <Button
                          onClick={() => {
                            i18n.changeLanguage("ar");
                          }}
                          variant="text"
                          size="medium"
                          sx={{ color: "#eadccc" }}
                        >
                          Ar
                          <LanguageIcon
                            sx={{
                              margin: "0px 5px",
                              color: "#fff",
                              fontSize: "18px",
                            }}
                          />
                        </Button>
                      )}
                      <IconButton onClick={toggleDrawer(false)}>
                        <CloseRoundedIcon sx={{ color: "#fff" }} />
                      </IconButton>
                    </Box>
                    <MenuItem sx={{ color: "#eadccc" }}>{t("home")}</MenuItem>
                    <MenuItem> {t("about")}</MenuItem>
                    <MenuItem> {t("destination")}</MenuItem>
                    <MenuItem> {t("services")}</MenuItem>
                    <Divider sx={{ my: 3 }} />
                    <MenuItem>
                      <Button
                        variant="contained"
                        size="medium"
                        sx={{ borderRadius: "40px", color: "#eadccc" }}
                        fullWidth
                      >
                        {t("getInTouch")}
                      </Button>
                    </MenuItem>
                  </Box>
                </div>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Box>
      </AppBar>
    </div>
  );
}
