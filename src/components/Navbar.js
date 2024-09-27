import React from "react";
import { AppBar, Stack, Toolbar, Typography, Button, IconButton } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label= 'logo'>

        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Merriweather, serif' }}>
    MoveCars.com
</Typography>


        <Stack direction='row' spacing={2} sx={{ fontFamily: 'Merriweather, serif' }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Careers</Button>
          <Button color="inherit">Help</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}