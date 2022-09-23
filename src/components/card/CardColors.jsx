import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import BlackTooltip from "../BlackTooltip/BlackTooltip";
import {Button} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {useEffect} from "react";

const CardColors = ({colorPalette, visible, setVisible, selectedColor, setSelectedColor}) => {
    const filterColors = colorPalette.filter(item => item.exist)
    const colors = filterColors.filter((_item, index) => index < 3)

    const handleCurrentColor = (color) => {
        selectedColor !== color ? setSelectedColor(color) : setSelectedColor('')
    }

    useEffect(() => {
        selectedColor && setVisible(true)
    },[selectedColor, visible])

    const TooltipColors = () => {
        return (
            <div className="card__tooltip">
                <span>В наличии:</span>
                <ul>
                    {
                        filterColors.map((obj, index) => {
                            return (
                                <li
                                    key={index}
                                    style={{backgroundColor: obj.color}}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    return (
        <ul className={`card__colors ${visible ? 'card__active' : 'card__disabled'}`}>
            <BlackTooltip title={TooltipColors()} placement="top-start">
                <AutoAwesomeOutlinedIcon color="primary"/>
            </BlackTooltip>
            {
                colors.map((palette, index) => {
                    const isCurrentColor = selectedColor === palette.color
                    return (
                        <li key={index}>
                            <Button
                                style={{backgroundColor: palette.color, top: isCurrentColor ? '-3px' : '0'}}
                                onClick={() => handleCurrentColor(palette.color)}
                                variant="contained">
                                {
                                    isCurrentColor &&
                                    <ExpandLessIcon
                                        color="primary"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-20px',
                                            zIndex: '1000'
                                        }}
                                    />
                                }
                            </Button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CardColors;