import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Link from "next/link";

interface Props {
  
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
          
            <h4 className="text-nav" >เสริมศิริ อลูมินั่ม & </h4>
          
    
          
          <h4 className="sub-nav-text" style={{color:"#FF9D34",fontWeight:"bold"}}> สแตนเลส</h4>
          
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
              
                <Link href="/">
                  <Button className="btnnav">
                    {" "}
                    <HomeIcon fontSize="small" />
                    &nbsp;หน้าแรก{" "}
                  </Button>
                </Link>
                <Link href="/products">
                  <Button className="btnnav">
                    <ProductionQuantityLimitsIcon fontSize="small" /> สินค้าของเรา
                  </Button>
                </Link>
                {/* <a href="#category">
                  <Button className="btnnav">Category</Button>
                </a> */}
                <Link href="/blog">
                  <Button className="btnnav">เรื่องหน้ารู้</Button>
                </Link>
                <Link href="/contact">
                  <Button className="btnnav">ติดต่อเรา</Button>
                </Link>
              
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
