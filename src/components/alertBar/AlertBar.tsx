import Snackbar from '@mui/material/Snackbar';
import {otherSelector} from "../../redux/other/otherSlice";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "@mui/material";
import {closeAlertBar} from "../../redux/other/otherSlice"
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import React from "react";

const AlertBar: React.FC = () => {
    const dispatch = useDispatch();
    const {statusAlert, alert} = useSelector(otherSelector);
    const {type, message} = alert
    const stylesAlert = {
        backgroundColor: '#414141',
        boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.1)',
        color: '#fff'
    }


    const handleClose: any = (event: any, reason: any) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closeAlertBar())
    };

    return (
        <Snackbar open={statusAlert} autoHideDuration={1200} onClose={handleClose}>
            <Alert
                icon={
                type === 'cart' ? <AddShoppingCartOutlinedIcon style={{color: '#73A2FA'}}/>
                    : <FavoriteIcon style={{color: '#ee4343'}}/>}
                onClose={handleClose}
                severity="error"
                sx={{width: '100%'}}
                variant="filled"
                className="alert"
                style={stylesAlert}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default AlertBar;