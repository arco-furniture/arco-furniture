import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import WhiteTooltip from "../WhiteTooltip/WhiteTooltip";

const CardColors = ({colorPalette, visible}) => {
    const filterColors = colorPalette.filter(item => item.exist)
    const colors = filterColors.filter((_item, index) => index < 3)

    const TooltipColors = () => {
        return(
            <div className="card__tooltip">
                <span>В наличии:</span>
                <ul>
                    {
                        filterColors.map((obj, index) => {
                         return <li key={index} style={{backgroundColor: obj.color}}></li>
                        })
                    }
                </ul>
            </div>
        )
    }

    return (
        <ul className={`card__colors ${visible ? 'card__active' : 'card__disabled'}`}>
            <WhiteTooltip title={TooltipColors()} placement="top-start">
                <AutoAwesomeOutlinedIcon color="primary"/>
            </WhiteTooltip>
            {
                colors.map((palette, index) => {
                    return <li key={index} style={{backgroundColor: palette.color}}></li>
                })
            }
        </ul>
    )
}

export default CardColors;