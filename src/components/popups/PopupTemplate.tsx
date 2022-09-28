import Dialog from "@mui/material/Dialog";
import {DialogContent} from "@mui/material";
import {useDispatch} from "react-redux";
import {IPopupTemplate} from "./types";
import React from "react";

const PopupTemplate: React.FC<IPopupTemplate> = ({children, status, handleClose}) => {
    const dispatch = useDispatch()
    const handleClosePopup: any = () => {
        dispatch(handleClose())
    }

    return (
        <Dialog open={status} onClose={() => dispatch(handleClosePopup)}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopupTemplate;