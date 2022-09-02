import { TextField, Typography, Box } from "@mui/material";

const formStyle = {
    bgcolor: '#FBFBFB',
    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    pt: '40px',
    pr: '22px',
    pb: '40px',
    pl: '22px',
};

const boxStyle = {
    display: 'flex',
};

const inputStyle = {
    width: '340px'
};

const Form: React.FC = () => {
    return (
        <Box sx={{
            ...formStyle,
            mr: '32px'
        }}>
            <Typography sx={{
                mb: '49px',
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '23px',
                color: '#414141',
            }}>
                Оформление заказа
            </Typography>
            <Box sx={{
                ...boxStyle
            }}>
                <TextField sx={{
                    ...inputStyle,
                    mr: '22px'
                }}
                    id="outlined-error"
                    label="ФИО*"
                    placeholder="Иванов Иван Иванович"
                />
                <TextField sx={{
                    ...inputStyle
                }}
                    id="outlined-error"
                    label="Город*"
                    placeholder="Краснодар"
                />
            </Box>
            <Box sx={{
                ...boxStyle
            }}>
                <TextField sx={{
                    ...inputStyle,
                    mr: '22px',
                    mt: '75px',
                }}
                    id="outlined-error"
                    label="Телефон*"
                    placeholder="+7 (000) 000 00 00"
                />
                <TextField sx={{
                    ...inputStyle,
                    mt: '75px'
                }}
                    id="outlined-error"
                    label="Адрес*"
                    placeholder="+7 (000) 000 00 00"
                />
            </Box>
        </Box >
    )
}

export default Form;