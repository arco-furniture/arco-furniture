import Dialog from "@mui/material/Dialog";
import {DialogContent} from "@mui/material";
import {useDispatch} from "react-redux";
import useWindowSize from 'react-use/lib/useWindowSize'

const PopupTemplate = ({children, status, handleClose}) => {
    const dispatch = useDispatch()
    const handleClosePopup = () => {
        dispatch(handleClose())
    }

    return (
        <Dialog
            open={status}
            onClose={() => dispatch(handleClosePopup)}
            minWidth="200px"
            fullWidth
        >
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopupTemplate;