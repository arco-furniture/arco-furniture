const CardColors = ({colorPalette, visible}) => {

    return (
        <ul className={`card__colors ${visible ? 'card__active' : 'card__disabled'}`}>
            {
                colorPalette.map((palette, index) => {
                    return (
                        <li key={index} style={{backgroundColor: `#${palette.color}`}}></li>
                    )
                })
            }
        </ul>
    )
}

export default CardColors;