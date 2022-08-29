
import React from "react"
import { Typography, Box, Checkbox, Tooltip, Button } from "@mui/material";
import { nextCount } from "../../../redux/test/numberOfStage";
import { useDispatch, useSelector } from "react-redux";

const titleStyle = {
    fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#414141',
};

const checkBoxContentStyle = {
    display: 'flex',
    alignItems: 'center',
    mt: '25px',
    mb: '15.5px'
};

const lineStyle = {
    width: '100%',
    height: '1px',
    bgcolor: '#E2E2E2'
};

const BasketMenu: React.FC = () => {
    const dispatch = useDispatch();

    const handleNextStage = () => {
        dispatch(nextCount())
    }
    return (
        <Box sx={{
            width: '396px',
            bgcolor: '#FBFBFB',
            boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
            padding: '20px',
        }}>
            <Typography sx={{
                ...titleStyle
            }}>Выберите способ доставки</Typography>
            <Box sx={{
                ...checkBoxContentStyle
            }}>
                <Checkbox />
                <Typography>Самовывоз</Typography>

                <Checkbox />
                <Typography>Доставка</Typography>
            </Box>

            <Typography sx={{
                ...titleStyle
            }}>Выберите способ оплаты</Typography>
            <Box sx={{
                ...checkBoxContentStyle
            }}>
                <Checkbox />
                <Typography>Наличные</Typography>

                <Checkbox />
                <Typography>Оплата картой</Typography>
            </Box>

            <Box sx={{
                ...lineStyle
            }} />

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: '15px'
            }}>
                <Typography sx={{
                    ...titleStyle,
                }}>Итого:</Typography>

                <Typography sx={{
                    ...titleStyle,
                }}>22 600 руб.</Typography>
            </Box>
            <Typography sx={{
                fontFamily: 'PT Sans',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '18px',
                color: '#626262',
                mt: '2px'
            }}>Стоимость указана без учета доставки</Typography>

            <Box sx={{
                ...lineStyle,
                mt: '34px',
                mb: '27px'
            }} />

            <Box sx={{
                display: 'flex',
                alignItems: 'start',
            }}>
                <Checkbox />
                <Typography sx={{
                    fontFamily: 'PT Sans',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#626262',
                    width: '327px',
                }}>Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.</Typography>
            </Box>

            <Button sx={{
                bgcolor: '#4675CE',
                color: 'white',
                mt: '36px',
                width: '100%',
                height: '50px',
                fontFamily: 'PT Sans',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '26px',
                lineHeight: '34px',
                textTransform: 'uppercase',
            }}
                variant="contained"
                onClick={handleNextStage}
            >Продолжить</Button>
        </Box >
    )
}

export default BasketMenu;