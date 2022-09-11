import React from "react";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {InputBase} from "@mui/material";

const Search = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #4675CE",
                borderRadius: '4px',
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                height: '40px',
                position: 'relative'
            }}
        >
            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '40px',
                height: '40px',
                bgcolor: '#4675CE'
            }}></Box>
            <SearchOutlinedIcon
                style={{zIndex: '100'}}
                sx={{color: "#fff", mr: 1, ml: 1, width: 22, height: 22}}
            />
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    minWidth: '20em',
                    paddingRight: '12px',
                    color: '#414141',
                    fontSize: '14px'
                }}
                placeholder="Поиск по сайту..."
                type="search"
            />
        </Box>
    );
}

export default Search;