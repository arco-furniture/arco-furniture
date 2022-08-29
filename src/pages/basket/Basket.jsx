import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { testSelector } from "../../redux/test/testSlice";
import Card from './components/Card';

const circleStyle = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: '#4675CE',
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

const Basket = () => {
    const { count } = useSelector(testSelector);

    return (
        <section>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    mb: '0',
                    mr: '31px'
                }} variant="h2" gutterBottom>
                    Корзина
                </Typography>
                <Box
                    sx={{
                        ...circleStyle,
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
                        bgcolor: 'rgba(65, 65, 65, 0.2)',
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
                        bgcolor: 'rgba(65, 65, 65, 0.2)',
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
            <Card />
        </section>
    )
}

export default Basket;