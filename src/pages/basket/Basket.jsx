import { Typography, Box, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from "@mui/material";
import Card from './components/Card';
import BasketNavigation from './components/BasketNavigation';
import { useNavigate } from "react-router-dom";

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

const Basket = () => {
    const navigate = useNavigate();

    const handleNextStage = () => {
        navigate("/basket-order")
    }

    return (
        <Box>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: 'rgba(65, 65, 65, 0.2)', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <Box sx={{
                display: 'flex',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <><Card /><Card /></>
                </Box>
                <Box sx={{
                    width: '396px',
                    bgcolor: '#FBFBFB',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px',
                    padding: '20px',
                }}>
                    <Typography sx={{
                        ...titleStyle
                    }}>Выберите способ доставки</Typography><Box sx={{
                        ...checkBoxContentStyle
                    }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="same"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="same" control={<Radio />} label="Самовывоз" />
                            <FormControlLabel value="delivery" control={<Radio />} label="Доставка" />
                        </RadioGroup>
                    </Box><Typography sx={{
                        ...titleStyle
                    }}>Выберите способ оплаты</Typography><Box sx={{
                        ...checkBoxContentStyle
                    }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="cash"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="cash" control={<Radio />} label="Наличные" />
                            <FormControlLabel value="card" control={<Radio />} label="Оплата картой" />
                        </RadioGroup>
                    </Box><Box sx={{
                        ...lineStyle
                    }} /><Box sx={{
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
                    </Box><Typography sx={{
                        fontFamily: 'PT Sans',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '18px',
                        color: '#626262',
                        mt: '2px'
                    }}>Стоимость указана без учета доставки</Typography><Box sx={{
                        ...lineStyle,
                        mt: '34px',
                        mb: '27px'
                    }} /><Box sx={{
                        display: 'flex',
                        alignItems: 'start',
                    }}>
                        <Checkbox id="checkBox" />
                        <Typography sx={{
                            fontFamily: 'PT Sans',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '18px',
                            color: '#626262',
                            width: '327px',
                        }}>Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.</Typography>
                    </Box><Button sx={{
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
                        className='btn'
                        variant="contained"
                        onClick={handleNextStage}
                    >Продолжить</Button>
                </Box>
            </Box>
        </Box >
    )
}

export default Basket;