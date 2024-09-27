import React from "react";
import { Box, Typography } from "@mui/material";

const ShippingEstimatesDisplay = ({ distance, carQuantity }) => {
  const estimates = [
    {
      company: "Company A",
      baseFee: 200,
      perMileRate: 2,
    },
    {
      company: "Company B",
      baseFee: 100,
      perMileRate: 2.5,
    },
    {
      company: "Company C",
      baseFee: 400,
      perMileRate: 1,
    },
  ];

  const calculateEstimate = (baseFee, perMileRate, distance, carQuantity) => {
    return (baseFee + perMileRate * distance) * carQuantity;
  };

  return (
    <Box
      sx={{
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Shipping Estimates
      </Typography>
      {estimates.map((estimate, index) => (
        <Box key={index} sx={{ marginBottom: "10px" }}>
          <Typography variant="body1">
            {estimate.company}: ${calculateEstimate(estimate.baseFee, estimate.perMileRate, distance, carQuantity).toFixed(2)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ShippingEstimatesDisplay;
