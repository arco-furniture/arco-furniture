import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import BlackTooltip from "../BlackTooltip/BlackTooltip";
import {Button} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React, {useEffect} from "react";
import {ICardColors} from "./types"

const CardColors: React.FC<ICardColors> = (props) => {
    const {colorPalette, visible, setVisible, selectedColor, setSelectedColor, isTop} = props
    const filterColors = colorPalette.filter(item => item.exist)
    const colors = filterColors.filter((_item, index) => index < 3)

    const handleCurrentColor = (color: string) => {
        if (!isTop) {
            selectedColor !== color ? setSelectedColor(color) : setSelectedColor('')
        }
    }

    useEffect(() => {
        selectedColor && setVisible(true)
    }, [selectedColor, visible])

    const TooltipColors = () => {
        return (
            <div className="card__tooltip">
                <span>В наличии:</span>
                <ul>
                    {
                        filterColors.map((obj, index) => <li key={index} style={{backgroundColor: obj.color}}/>)
                    }
                </ul>
            </div>
        )
    }

    return (
        <ul className={`card__colors ${visible ? 'card__active' : 'card__disabled'}`}>
            {
                !isTop &&
                <BlackTooltip title={TooltipColors()} placement="top-start">
                    <AutoAwesomeOutlinedIcon color="primary"/>
                </BlackTooltip>
            }
            {
                colors.map((palette, index) => {
                    const isCurrentColor = selectedColor === palette.color
                    const styleButton = {backgroundColor: palette.color, top: isCurrentColor ? '-3px' : '0'}
                    const styleIcon = {position: 'absolute', bottom: '-20px', zIndex: '1000'}
                    return (
                        <li key={index}>
                            <Button
                                disabled={isTop}
                                style={styleButton}
                                onClick={() => handleCurrentColor(palette.color)}
                                variant="contained">
                                {
                                    isCurrentColor && !isTop &&
                                    <ExpandLessIcon color="primary" sx={styleIcon}/>
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