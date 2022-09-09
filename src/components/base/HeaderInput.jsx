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
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          height: '42px',
          position: 'relative'
      }}
    >
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '40px',
            height: '100%',
            backgroundColor: '#4675CE'
        }}></div>
      <SearchOutlinedIcon
          style={{zIndex: '100'}}
        sx={{ color: "#fff", mr: 1, ml: 1, width: 22, height: 22 }}
      />
      <InputBase
        sx={{ ml: 1, flex: 1, minWidth: '17em', paddingRight: '12px', color: '#414141', fontSize: '14px' }}
        placeholder="Поиск по сайту"
        inputProps={{ 'aria-label': 'Поиск по сайту' }}
        type="search"
      />
    </Box>
  );
}
