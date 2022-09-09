import Snackbar from '@mui/material/Snackbar';
import {otherSelector} from "../../redux/other/otherSlice";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "@mui/material";
import {closeAlertBar} from "../../redux/other/otherSlice"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const AlertFavorite = () => {
    const dispatch = useDispatch();
    const {statusAlert, message} = useSelector(otherSelector);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closeAlertBar())
    };

    return (
        <Snackbar open={statusAlert} autoHideDuration={1200} onClose={handleClose}>
            <Alert icon={<FavoriteBorderIcon/>}
                   onClose={handleClose}
                   severity="error"
                   sx={{width: '100%'}}
                   variant="filled"
            >
                <p><span>{message}</span></p>
            </Alert>
        </Snackbar>
    )
}

export default AlertFavorite;