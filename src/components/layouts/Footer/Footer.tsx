import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <Box className="text-center h-full py-5">
      <Typography sx={{ color: "text.primary" }}>
        Movie List by Dani Permana &copy; {year}
      </Typography>
    </Box>
  );
};

export default Footer;
