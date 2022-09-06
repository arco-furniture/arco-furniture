import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function InputWithIcon() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #4675CE",
      }}
    >
      <SearchOutlinedIcon
        sx={{ color: "action.active", mr: 2.6, ml: 1.7, width: 20, height: 20 }}
      />
      <TextField
        id="standard-search"
        type="search"
        variant="standard"
        label="Поиск по сайту..."
        sx={{
          minWidth: '13em',
        }}
      />
    </Box>
  );
}
