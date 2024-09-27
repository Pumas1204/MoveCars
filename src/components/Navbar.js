import React from "react";
import { AppBar, Stack, Toolbar, Typography, Button, IconButton } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label= 'logo'>

        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MoveCars
        </Typography>

        <Stack direction='row' spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Careers</Button>
          <Button color="inherit">Help</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}