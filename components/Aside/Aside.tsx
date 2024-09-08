"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Typography } from "@mui/material";

import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/store/hooks";
import { uiActions } from "@/lib/features/ui-slice";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Aside(props: Props) {
  const dispatch = useAppDispatch();
  const drawerIsOpen = useAppSelector((state) => state.ui.drawerIsOpen);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleToggleDrawer = () => {
    dispatch(uiActions.toggleDrawer());
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            flexGrow: 1,
            mr: 2,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          App
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleToggleDrawer}
        >
          <ChevronLeftIcon sx={{ display: { xs: "", md: "none" } }} />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={drawerIsOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          ModalProps={{
            onBackdropClick: handleToggleDrawer,
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open={drawerIsOpen}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
