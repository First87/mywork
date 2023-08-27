import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { motion } from "framer-motion";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "All Products", "Category", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="container">
      <List>
        <ListItemButton className="listnav" href="/">
         หน้าแรก
        </ListItemButton>

        <ListItemButton className="listnav" href="/products">
          สินค้าของเรา
        </ListItemButton>
        {/* <ListItemButton className="listnav" href="#category">
          Category
        </ListItemButton> */}
        <ListItemButton className="listnav" href="/blog">
         เรื่องหน้ารู้
        </ListItemButton>
        <ListItemButton className="listnav" href="/contact">
          ติดต่อเรา
        </ListItemButton>
      </List>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
   <div>
     <Box sx={{ display: "flex" }}>
      <AppBar className="nav1"
        
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      damping: 200,
                      stiffness: 500,
                    },
                  },
                  hidden: {
                    opacity: 0,
                    x: -400,
                    transition: {
                      type: "spring",
                      damping: 0,
                      stiffness: 0,
                    },
                  },
                }}
              >
          <Image src="/nav.png" width={60} height={60} alt="logo" />
          </motion.div> */}
          &nbsp;&nbsp;
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <h4 className="text-nav" >เสริมศิริ อลูมินั่ม & </h4>
          </motion.div>
          &nbsp;&nbsp;
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
          <h4 className="sub-nav-text" style={{color:"#FF9D34",fontWeight:"bold"}}> สแตนเลส</h4>
          </motion.div>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "inline" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <nav className="navMenu">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 100,
                      stiffness: 150,
                    },
                  },
                  hidden: {
                    opacity: 0,
                    y: 50,
                    transition: {
                      type: "spring",
                      damping: 0,
                      stiffness: 0,
                    },
                  },
                }}
              >
                <a href="/">
                  <Button className="btnnav">
                    {" "}
                    <HomeIcon fontSize="small" />
                    &nbsp;หน้าแรก{" "}
                  </Button>
                </a>
                <a href="/products">
                  <Button className="btnnav">
                    <ProductionQuantityLimitsIcon fontSize="small" /> สินค้าของเรา
                  </Button>
                </a>
                {/* <a href="#category">
                  <Button className="btnnav">Category</Button>
                </a> */}
                <a href="/blog">
                  <Button className="btnnav">เรื่องหน้ารู้</Button>
                </a>
                <a href="/contact">
                  <Button className="btnnav">ติดต่อเรา</Button>
                </a>
              </motion.div>
            </nav>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
   </div>
  );
}
