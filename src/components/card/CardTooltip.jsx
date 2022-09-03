import {Tooltip} from "@mui/material";

const CardTooltip = ({children}) => {

    const tooltipStyles = {
        tooltip: {
            sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                lineHeight: '15px',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                color: '#757575;',
                bgcolor: '#f5f5f5',
                '& .MuiTooltip-arrow': {
                    color: '#f5f5f5',
                },
                width: '75px',
                padding: '7px 5px'
            },
        },
    }

    return(
        <Tooltip componentsProps={tooltipStyles} title="Добавить в избранное" placement="top-start" arrow>
            {children}
        </Tooltip>
    )
}

export default CardTooltip;