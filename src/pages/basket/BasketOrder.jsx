import { Typography, Switch, Box, Button } from "@mui/material";
import Form from './components/Form';
import { useNavigate } from "react-router-dom";
import BasketNavigation from './components/BasketNavigation';


const titleStyle = {
    fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#414141',
};

const lineStyle = {
    width: '100%',
    height: '1px',
    bgcolor: '#E2E2E2'
};

const BasketOrder = () => {
    const navigate = useNavigate();

    const handleNextStage = () => {
        navigate("/basket-approval")
    }


    return (
        <Box>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: '#4675CE', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <div style={{ display: 'flex' }}>
                <Form />
                <Box sx={{
                    width: '396px',
                    bgcolor: '#FBFBFB',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px',
                    padding: '20px',
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: '98px'
                    }}>
                        <Typography sx={{
                            ...titleStyle,
                        }}>Итого:</Typography>

                        <Typography sx={{
                            ...titleStyle,
                        }}>22 600 руб.</Typography>
                    </Box>
                    <Box sx={{
                        ...lineStyle,
                        mt: '34px',
                        mb: '27px'
                    }} />
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Typography>
                            Сборка 2 193 ₽
                        </Typography>
                        <Switch defaultChecked />
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
                </Box>
            </div>
        </Box>
    )
}

export default BasketOrder;