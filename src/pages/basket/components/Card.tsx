import React from "react"
import img from '../../../images/card-img.svg';
import { Typography, Box, Checkbox, Tooltip, Button } from "@mui/material";


const Card: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            mb: '29.4px',
            mr: '30px',
            bgcolor: '#FBFBFB',
            boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px'
        }}>
            <img src={img} alt='img' style={{ width: '188px' }} />
            <Box sx={{
                p: '15px 15px 15px 33px',
                display: 'flex',
                boxSizing: 'border-box'
            }}>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox defaultChecked />
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '18px',
                            lineHeight: '23px',
                            color: '#414141'
                        }}>Модульная кухня Лондон</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: '37px'
                    }}>
                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '18px',
                            mr: '5px',
                            color: '#555555'
                        }}>Цвет:</Typography>
                        <Box sx={{
                            width: '15.8px',
                            height: '15.8px',
                            bgcolor: '#2D2D2D',
                            borderRadius: '2px',
                        }} />
                    </Box>
                    <Typography sx={{
                        mt: '7px',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '18px',
                        color: '#555555'
                    }}>Характеристики товара</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    width: '62.6px',
                    height: '29px',
                    alignItems: 'center',
                    border: 1,
                    borderRadius: '6px',
                    borderColor: '#D9D9D9',
                    ml: '39px',
                    mr: '30px'
                }} >

                    1

                </Box>

                <Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '18px',
                            textDecoration: "line-through",
                            color: 'rgba(65, 65, 65, 0.2)',
                            mr: '10px'
                        }}>5 017 руб.</Typography>
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '21px',
                            color: '#414141',
                        }}>5 017 руб.</Typography>
                    </Box>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: '#4675CE',
                        mt: '2.75px',
                        textAlign: 'right'
                    }}>выгода 1 100 ₽</Typography>
                    <Box>
                        <Typography sx={{
                            mt: '42.1px',
                        }}>Артикул: 4874678</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Card;