import React from "react";

// Mui
import { Box, Typography } from "@mui/material";

// Components
import TableComponent from "./components/Table/index.tsx";

// Css
import "./styles/global.css";
import "./styles/normalize.css";

function App() {
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "1280px",
        minHeight: "100vh",
        display: "flex",
        gap: 4,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          gap: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: (theme) => theme.palette.primary.contrastText,
          padding: "16px 32px",
          boxShadow: "0px 4px 25px rgba(255, 255, 255, 0.19)",
          borderRadius: "0 0 8px 8px",
          color: (theme) => theme.palette.background.paper, // primary accent color
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Estefano Chacón
        </Typography>
        <Typography variant="h6" component="h2" sx={{ fontWeight: "medium" }}>
          Prueba Sentisis
        </Typography>
      </Box>

      {/* Table */}
      <Box
        sx={{
          maxWidth: "100%",
          backgroundColor: (theme) => theme.palette.primary.contrastText,
          borderRadius: "12px",
          padding: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.9)",
        }}
      >
        <TableComponent />
      </Box>
    </Box>
  );
}

export default App;
