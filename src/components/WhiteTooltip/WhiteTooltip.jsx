import {Tooltip} from "@mui/material";

const WhiteTooltip = ({children, title, placement}) => {

    const tooltipStyles = {
        tooltip: {
            sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                lineHeight: '15px',
                boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
                color: '#4675CE',
                bgcolor: '#f5f5f5',
                '& .MuiTooltip-arrow': {
                    color: '#f5f5f5',
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

export default WhiteTooltip;