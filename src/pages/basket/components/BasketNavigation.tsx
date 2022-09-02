import React from "react"
import { Typography, Box } from "@mui/material";

const circleStyle = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '2rem',
    height: '2rem',
    ml: '9px',
};

const lineStyle = {
    bgcolor: '#555555',
    width: '153px',
    height: '1px',
    ml: '9px',
};

const navigationStyle = {
    ml: '7px',
};

const BasketNavigation = (bgcolor: any) => {

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Typography sx={{
                    mr: '31px',
                    mt: '20px',
                    mb: '12px',
                    fontFamily: 'PT Sans',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '26px',
                    lineHeight: '34px',
                    color: '#414141',
                }} variant="h2" gutterBottom>
                    Корзина
                </Typography>
                <Box
                    sx={{
                        ...circleStyle,
                        bgcolor: `${bgcolor.bgcolor[1]}`
                    }}
                >
                    1
                </Box>
                <Typography sx={{
                    ...navigationStyle
                }}>
                    Ваша корзина
                </Typography>
                <Box sx={{
                    ...lineStyle,
                }} />

                <Box
                    sx={{
                        ...circleStyle,
                        bgcolor: `${bgcolor.bgcolor[2]}`
                    }}
                >
                    2
                </Box>
                <Typography sx={{
                    ...navigationStyle
                }}>
                    Оформление заказа
                </Typography>
                <Box sx={{
                    ...lineStyle,
                }} />

                <Box
                    sx={{
                        ...circleStyle,
                        bgcolor: `${bgcolor.bgcolor[3]}`
                    }}
                >
                    3
                </Box>
                <Typography sx={{
                    ...navigationStyle
                }}>
                    Подтверждение
                </Typography>
            </Box>
        </Box >
    )
}

export default BasketNavigation;