import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputBase } from "@mui/material";

export default function InputWithIcon() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #4675CE",
        borderRadius: '4px',
        height: '45px',
      }}
    >
      <SearchOutlinedIcon
        sx={{ color: "action.active", mr: 2.6, ml: 1.7, width: 20, height: 20 }}
      />
      <InputBase
        sx={{ ml: 1, flex: 1, minWidth: '13em', }}
        placeholder="Поиск по сайту"
        inputProps={{ 'aria-label': 'Поиск по сайту' }}
      />
    </Box>
  );
}
