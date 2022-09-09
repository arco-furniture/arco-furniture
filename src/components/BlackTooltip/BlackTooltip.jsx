import {Tooltip} from "@mui/material";

const BlackTooltip = ({children, title, placement}) => {

    const tooltipStyles = {
        tooltip: {
            sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                lineHeight: '15px',
                boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.1)',
                color: '#fff',
                bgcolor: '#414141',
                '& .MuiTooltip-arrow': {
                    color: '#414141',
                },
                minWidth: '75px',
                padding: '7px 5px'
            },
        },
    }

    return(
        <Tooltip componentsProps={tooltipStyles} title={title} placement={placement} arrow>
            {children}
        </Tooltip>
    )
}

export default BlackTooltip;