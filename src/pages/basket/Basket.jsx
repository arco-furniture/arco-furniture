import React, { useEffect } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { testSelector } from "../../redux/test/testSlice";
import { stageSelector } from "../../redux/test/numberOfStage";
import Card from './components/Card';
import BasketMenu from './components/BasketMenu';

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
    const { stage } = useSelector(stageSelector);

    useEffect(() => {
        console.log(stage)
    }, [stage])

    return (
        <section>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Typography sx={{
                    mb: '0',
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
            <Box sx={{
                display: 'flex',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Card />
                    <Card />
                </Box>
                {stage === 1 ? (
                    <BasketMenu />
                ) : '21'}
            </Box>
        </section >
    )
}

export default Basket;