import * as React from "react";
import { styled } from "@mui/material/styles";
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

  return (
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
                  paddingLeft: "20px",
                  color: "#eadccc",
                }}
              >
                Al-Omran
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
            <Button variant="text" size="medium" sx={{ color: "#eadccc" }}>
              Home
            </Button>
            <Button variant="text" size="medium">
              About Us
            </Button>
            <Button variant="text" size="medium">
              Destinations
            </Button>
            <Button variant="text" size="medium">
              Services
            </Button>
            <Button variant="text" size="medium" sx={{ color: "#eadccc" }}>
              Ar
              <LanguageIcon
                sx={{ margin: "0px 5px", color: "#fff", fontSize: "18px" }}
              />
            </Button>
            <Button
              variant="contained"
              size="medium"
              sx={{ borderRadius: "40px", color: "#eadccc" }}
            >
              Get in touch
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
                  <Button
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
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </Box>
                <MenuItem sx={{ color: "#eadccc" }}>Home</MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Destinations</MenuItem>
                <MenuItem>Services</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ borderRadius: "40px", color: "#eadccc" }}
                    fullWidth
                  >
                    Get in touch
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Box>
    </AppBar>
  );
}
