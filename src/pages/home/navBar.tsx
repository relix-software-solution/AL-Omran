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
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "../../assets/logo1.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: "40px",
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: "#1d1b56c9",
  boxShadow: (theme.vars || theme).shadows[1],
}));

/* -------------------------------------------------------------------------- */
/*                                Hide App Bar                                */
/* -------------------------------------------------------------------------- */
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollDirection;
}

function HideOnScroll({ children }: { children: React.ReactNode }) {
  const scrollDirection = useScrollDirection();

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: scrollDirection === "down" ? -100 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ position: "fixed", width: "100%", zIndex: 1100 }}
    >
      {children}
    </motion.div>
  );
}

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    setOpen(newOpen);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t, i18n] = useTranslation();

  const location = useLocation();

  return (
    <HideOnScroll>
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
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  px: 0,
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={logo}
                    sx={{
                      width: "90px",
                      padding: "10px 30px",
                      margin: "10px 0 auto",
                    }}
                  />
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
                <Link to="/#home">
                  <Button
                    variant="text"
                    size="medium"
                    sx={{
                      color: location.hash === "#home" ? "#BCA966" : "#fff",
                      borderBottom:
                        location.hash === "#home"
                          ? "2px solid #BCA966"
                          : "none",
                      borderRadius: 0,
                    }}
                  >
                    {t("home")}
                  </Button>
                </Link>
                <Link to="/#about">
                  {" "}
                  <Button
                    variant="text"
                    size="medium"
                    sx={{
                      color: location.hash === "#about" ? "#BCA966" : "#fff",
                      borderBottom:
                        location.hash === "#about"
                          ? "2px solid #BCA966"
                          : "none",
                      borderRadius: 0,
                    }}
                  >
                    {t("about")}
                  </Button>
                </Link>
                <Link to="/#dest">
                  <Button
                    variant="text"
                    size="medium"
                    sx={{
                      color: location.hash === "#dest" ? "#BCA966" : "#fff",
                      borderBottom:
                        location.hash === "#dest"
                          ? "2px solid #BCA966"
                          : "none",
                      borderRadius: 0,
                    }}
                  >
                    {t("destination")}
                  </Button>
                </Link>
                <Link to="/#services">
                  <Button
                    variant="text"
                    size="medium"
                    sx={{
                      color: location.hash === "#services" ? "#BCA966" : "#fff",
                      borderBottom:
                        location.hash === "#services"
                          ? "2px solid #BCA966"
                          : "none",
                      borderRadius: 0,
                    }}
                  >
                    {t("services")}
                  </Button>
                </Link>
                {i18n.language === "ar" && (
                  <Button
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    variant="text"
                    size="medium"
                    sx={{ color: "#BCA966" }}
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
                    sx={{ color: "#BCA966" }}
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
                <Link to="/#contact">
                  {" "}
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ borderRadius: "40px", color: "#fff" }}
                  >
                    {t("getInTouch")}
                  </Button>
                </Link>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
                <IconButton
                  aria-label="Menu button"
                  onClick={toggleDrawer(true)}
                >
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
                        backgroundColor: "#1D1B56",
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
                            sx={{ color: "#BCA966" }}
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
                            sx={{ color: "#BCA966" }}
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
                      <Link to="/#home" onClick={toggleDrawer(false)}>
                        {" "}
                        <MenuItem
                          sx={{
                            color:
                              location.hash === "#home" ? "#BCA966" : "#fff",
                          }}
                        >
                          {t("home")}
                        </MenuItem>
                      </Link>
                      <Link to="/#about" onClick={toggleDrawer(false)}>
                        <MenuItem
                          sx={{
                            color:
                              location.hash === "#about" ? "#BCA966" : "#fff",
                          }}
                        >
                          {" "}
                          {t("about")}
                        </MenuItem>
                      </Link>
                      <Link to="/#dest" onClick={toggleDrawer(false)}>
                        {" "}
                        <MenuItem
                          sx={{
                            color:
                              location.hash === "#dest" ? "#BCA966" : "#fff",
                          }}
                        >
                          {" "}
                          {t("destination")}
                        </MenuItem>
                      </Link>
                      <Link to="/#services" onClick={toggleDrawer(false)}>
                        {" "}
                        <MenuItem
                          sx={{
                            color:
                              location.hash === "#services"
                                ? "#BCA966"
                                : "#fff",
                          }}
                        >
                          {" "}
                          {t("services")}
                        </MenuItem>
                      </Link>
                      <Divider sx={{ my: 3 }} />
                      <Link to="/#contact" onClick={toggleDrawer(false)}>
                        <MenuItem>
                          {" "}
                          <Button
                            variant="contained"
                            size="medium"
                            sx={{ borderRadius: "40px", color: "#fff" }}
                            fullWidth
                          >
                            {t("getInTouch")}
                          </Button>
                        </MenuItem>
                      </Link>
                    </Box>
                  </div>
                </Drawer>
              </Box>
            </StyledToolbar>
          </Box>
        </AppBar>
      </div>
    </HideOnScroll>
  );
}
